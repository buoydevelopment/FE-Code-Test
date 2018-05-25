//
//  ViewController.swift
//  CocktailsChallenge
//
//  Created by Martin Gonzalez vega on 23/5/18.
//  Copyright © 2018 tincho. All rights reserved.
//

import UIKit
import Kingfisher

class CocktailListViewController: UIViewController {

    // MARK: IBOulet
    @IBOutlet weak var tableViewCocktails: UITableView!
    @IBOutlet weak var activityIndicator: UIActivityIndicatorView!
    
    // MARK: statics
    static let cocktailCellID = "cocktailCellId"
    let searchController = UISearchController(searchResultsController: nil)

    // MARK: vars
    var dataSource : [Cocktail] = []
    var filteredCocktails = [Cocktail]()
    var selectedCocktail : Cocktail!

    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()
        setupNavbar()
        setupTableView()
        fetchCocktails()
        ImageDownloader.default.downloadTimeout = 60.0
    }

    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == Constants.segues.toCocktailDetail {
            let destinationViewController = segue.destination as? CocktailDetailViewController
            destinationViewController?.cocktailDetailHandler = {
                return self.selectedCocktail
            }
        }
    }

    // MARK: - Private instance methods

    func searchBarIsEmpty() -> Bool {
        return searchController.searchBar.text?.isEmpty ?? true
    }

    func filterContentForSearchText(_ searchText: String, scope: String = "All") {
        filteredCocktails = dataSource.filter({( cocktail : Cocktail) -> Bool in
            return cocktail.name.lowercased().contains(searchText.lowercased())
        })

        tableViewCocktails.reloadData()
    }

    func isFiltering() -> Bool {
        return searchController.isActive && !searchBarIsEmpty()
    }

    func setupTableView() {
        tableViewCocktails.register(UINib(nibName:"CocktailCell", bundle: nil),
                                    forCellReuseIdentifier: CocktailListViewController.cocktailCellID)
        tableViewCocktails.separatorStyle = .none
        tableViewCocktails.backgroundColor = Constants.color.mainLightBlue
    }

    func setupNavbar() {
        title = "CocktailListTitle".translate()
        navigationController?.navigationBar.prefersLargeTitles = true

        searchController.searchBar.placeholder = "SearchCocktail".translate()
        searchController.obscuresBackgroundDuringPresentation = false
        searchController.searchResultsUpdater = self
        navigationItem.searchController = searchController
        navigationItem.hidesSearchBarWhenScrolling = false
        definesPresentationContext = true
    }

    func fetchCocktails() {
        Cocktail.queryAll { (resulList, error) in
            if let cocktails = resulList {
                self.dataSource = cocktails
                self.tableViewCocktails.reloadData()
                for index in 0..<self.dataSource.count {
                    Cocktail.queryDetail(cocktail: self.dataSource[index], completion: { (cocktail, error) in

                        if cocktail != nil {
                            self.dataSource[index] = cocktail!
                            let indexPath = IndexPath(item: index, section: 0)
                            self.tableViewCocktails.reloadRows(at: [indexPath], with: .none)
                        }
                    })
                }
            }
            self.activityIndicator.stopAnimating()
        }
    }
}

extension CocktailListViewController: UITableViewDataSource, UITableViewDelegate {

    // MARK: UITableViewDataSource
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        if isFiltering() {
            return filteredCocktails.count
        }
        return dataSource.count
    }

    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: CocktailListViewController.cocktailCellID) as! CocktailCell

        var cocktial : Cocktail!

        if isFiltering() {
            cocktial = filteredCocktails[indexPath.row]
        } else {
            cocktial = dataSource[indexPath.row]
        }

        cell.labelCocktailTitle.text = cocktial.name

        let processor = RoundCornerImageProcessor(cornerRadius: 30)
        let url = URL(string: cocktial.thumbUrl)
        let resource = ImageResource(downloadURL: url!, cacheKey: cocktial.thumbUrl)
        cell.imageCocktail.kf.indicatorType = .activity
        cell.imageCocktail.kf.setImage(with: resource, options: [.processor(processor)])

        if cocktial.instructions != "" {
            cell.labelInstructionsText = cocktial.ingredientsSummary
        }

        return cell
    }

    // MARK: UITableViewDelegate
    func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        tableView.deselectRow(at: indexPath, animated: true)
        if isFiltering() {
            selectedCocktail = filteredCocktails[indexPath.row]
        } else {
            selectedCocktail = dataSource[indexPath.row]
        }
        performSegue(withIdentifier: Constants.segues.toCocktailDetail, sender: self)
    }

    func tableView(_ tableView: UITableView, heightForRowAt indexPath: IndexPath) -> CGFloat {
        return 160
    }
}

extension CocktailListViewController: UISearchResultsUpdating {
    // MARK: - UISearchResultsUpdating Delegate
    func updateSearchResults(for searchController: UISearchController) {
        filterContentForSearchText(searchController.searchBar.text!)
    }
}
