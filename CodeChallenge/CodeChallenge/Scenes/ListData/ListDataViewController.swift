//
//  ListDataViewController.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit


protocol ListDataDisplayLogic: class {
    func displayItems(viewModel: ListDataModels.List.ViewModel)
    func displayErrorGettingItems(viewModel: ListDataModels.List.ViewModel)
}

class ListDataViewController: UIViewController {
    
    @IBOutlet private weak var tableView: UITableView!
    

    let cellIdentifier = "listTableCellIdentifier"
    
    private var loadingView = UIView()
    
    var itemsData: [ListDataModels.List.ViewModel.DisplayedItem] = [] {
        didSet {
            DispatchQueue.main.async { [weak self] in
                guard let `self` = self else {return }
                `self`.tableView.reloadData()
            }
        }
    }
    
    
    let searchController = UISearchController(searchResultsController: nil)
    var filteredDrinks = [ListDataModels.List.ViewModel.DisplayedItem]()
    
    
    var isFiltering: Bool {
        return searchController.isActive && !searchBarIsEmpty
    }
    
    var searchBarIsEmpty: Bool {
        // Returns true if the text is empty or nil
        return searchController.searchBar.text?.isEmpty ?? true
    }
    
    var interactor: ListDataInteractor?
    var router: ListDataRouter?

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        title = "Random Drinks"
        
        tableView.tableFooterView = UIView()
        
        loadingView = createSpinner()
        setup()
        getItems()
    }

    
    //MARK: Private
    func setup(){
        let interactor = ListDataInteractor()
        let presenter = ListDataPresenter()
        let router = ListDataRouter()
        
        interactor.presenter = presenter
        presenter.viewController = self
        router.viewController = self
        
        self.interactor = interactor
        self.router = router
        
        // Setup the Search Controller
        searchController.searchResultsUpdater = self
        searchController.obscuresBackgroundDuringPresentation = false
        searchController.searchBar.placeholder = "Search Drinks"
        navigationItem.searchController = searchController
        definesPresentationContext = true
        
        // Setup the Scope Bar
        searchController.searchBar.delegate = self
    }
    
    //MARK: IBAction
    @IBAction func filterList(_ sender: UIBarButtonItem) {
        UIView.animate(withDuration: 0.4) { [weak self] in
            guard let `self` = self else { return }
            `self`.tableView.setContentOffset(CGPoint(x: 0, y: -50), animated: false)
        }
    }
}

extension ListDataViewController {
    fileprivate func getItems() {
        guard let interactor = self.interactor else { return }
        showOrHideSpinner(spinner: loadingView, mustHideSpinner: false)
        
        let request = ListDataModels.List.Request()
        interactor.getListOfItems(request: request)
    }
}

extension ListDataViewController: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if isFiltering {
            return filteredDrinks.count
        }
        
        return itemsData.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: cellIdentifier, for: indexPath) as? ListDataTableViewCell else {
            return UITableViewCell()
        }
        
        let itemData: ListDataModels.List.ViewModel.DisplayedItem
            
        if isFiltering {
            itemData = filteredDrinks[indexPath.row]
        } else {
            itemData = itemsData[indexPath.row]
        }
        
        cell.item = itemData
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        
        
        guard let router = router else { return }
        let itemData: ListDataModels.List.ViewModel.DisplayedItem
        
        if isFiltering {
            itemData = filteredDrinks[indexPath.row]
        } else {
            itemData = itemsData[indexPath.row]
        }
        router.routeToItemDetail(withItem: itemData)
    }
    
    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 132
    }

}

extension ListDataViewController: UISearchResultsUpdating, UISearchBarDelegate {
    // MARK: - UISearchBar Delegate
    func searchBar(_ searchBar: UISearchBar, selectedScopeButtonIndexDidChange selectedScope: Int) {
        if let searchText = searchBar.text {
            filterContentForSearchText(searchText)
        }
    }
    
    // MARK: - UISearchResultsUpdating Delegate
    func updateSearchResults(for searchController: UISearchController) {
        if let searchText = searchController.searchBar.text {
            filterContentForSearchText(searchText)
        }
    }
    
    // MARK: - Private instance methods
    
    func filterContentForSearchText(_ searchText: String) {
        filteredDrinks = itemsData.filter({( drink : ListDataModels.List.ViewModel.DisplayedItem) -> Bool in
            return drink.title.lowercased().contains(searchText.lowercased())
        })
        
        tableView.reloadData()
    }
}

extension ListDataViewController: ListDataDisplayLogic {
    func displayItems(viewModel: ListDataModels.List.ViewModel) {
        showOrHideSpinner(spinner: loadingView, mustHideSpinner: true)
        itemsData = viewModel.displayedItems
    }
    
    func displayErrorGettingItems(viewModel: ListDataModels.List.ViewModel) {
        showOrHideSpinner(spinner: loadingView, mustHideSpinner: true)
        alert(message: "Error Getting Data", title: viewModel.errorMessage ?? "Bad Connection")
    }
}
