//
//  DetailDataViewController.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

protocol DetailDataDisplayLogic: class {
    func displayItem(viewModel: DetailDataModels.Detail.ViewModel)
    func displayErrorGettingItems(viewModel: DetailDataModels.Detail.ViewModel)
}

class DetailDataViewController: UIViewController {
    
    let cellIdentifier = "detailItemTableCellIdentifier"
    
    @IBOutlet private weak var tableView: UITableView!
    
    @IBOutlet weak var posterImage: UIImageView!
    
    private var loadingView = UIView()
    
    var itemDetail: DetailDataModels.Detail.ViewModel?
    
    var dataDetails: [String] = [] {
        didSet {
            DispatchQueue.main.async { [weak self] in
                guard let `self` = self else {return }
                `self`.tableView.reloadData()
            }
        }
    }

    
    var interactor: DetailDataInteractor?
    var router: DetailDataRouter?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        // Do any additional setup after loading the view.
        guard let itemDetail = itemDetail else {return}
        
        title = itemDetail.title
        
        tableView.estimatedRowHeight = 132.0
        tableView.rowHeight = UITableView.automaticDimension
        tableView.tableFooterView = UIView()
        
        DispatchQueue.main.async { [weak self] in
            guard let `self` = self else {return }
            `self`.posterImage.downloadedFrom(link: itemDetail.posterURL)
            `self`.dataDetails = itemDetail.instructions
        }
        
        loadingView = createSpinner()
        setup()
        getItemDetail()
    }
    
    
    //MARK: Private
    func setup(){
        let interactor = DetailDataInteractor()
        let presenter = DetailDataPresenter()
        let router = DetailDataRouter()
        
        interactor.presenter = presenter
        presenter.viewController = self
        router.viewController = self
        
        self.interactor = interactor
        self.router = router
    }
}

extension DetailDataViewController {
    fileprivate func getItemDetail() {
        guard let interactor = self.interactor else { return }
        showOrHideSpinner(spinner: loadingView, mustHideSpinner: false)

        let request = DetailDataModels.Detail.Request(itemID: itemDetail?.ID ?? "")
        interactor.getDetailOfItem(request: request)
    }
}

extension DetailDataViewController: DetailDataDisplayLogic {
    func displayItem(viewModel: DetailDataModels.Detail.ViewModel) {
        showOrHideSpinner(spinner: loadingView, mustHideSpinner: true)
        
        guard viewModel.errorMessage == nil else {return}
        
        DispatchQueue.main.async { [weak self] in
            guard let `self` = self else {return }
            `self`.posterImage.downloadedFrom(link: viewModel.posterURL)
            `self`.dataDetails = viewModel.instructions
        }
    }
    
    func displayErrorGettingItems(viewModel: DetailDataModels.Detail.ViewModel) {
        showOrHideSpinner(spinner: loadingView, mustHideSpinner: true)
        alert(message: "Error Getting Data", title: viewModel.errorMessage ?? "Bad Connection")
    }
}


extension DetailDataViewController: UITableViewDataSource, UITableViewDelegate {
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return dataDetails.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: cellIdentifier, for: indexPath) as? DetailDataTableViewCell else {
            let customCell = UITableViewCell()
            customCell.textLabel?.text = "No Data"
            return customCell
        }
        
        let itemData = dataDetails[indexPath.row]
        cell.dataLabel.text = itemData
        
        return cell
    }
    
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
    }
}
