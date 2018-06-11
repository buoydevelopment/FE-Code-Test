//
//  CocktailsTableViewController.swift
//  Drinks
//
//  Created by Mac Ward on 21/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import UIKit
import Swinject
import Dip
import Dip_UI
import Kingfisher

class CocktailsTableViewController: UITableViewController {
  
  lazy var viewModel = CocktailsViewModel()
  override func viewDidLoad() {
    super.viewDidLoad()
    setup()
    
  }
  
  func setup() {
    view.backgroundColor = AppColor.MainGreen
    navigationController?.navigationBar.isTranslucent = false
    navigationController?.navigationBar.tintColor = UIColor.white
    navigationController?.navigationBar.barTintColor = AppColor.MainGreen
    navigationController?.navigationBar.shadowImage = UIImage() //remove pesky 1 pixel line
    
    viewModel.fetchCocktails()
    tableView.register(UINib(nibName: "DrinksTableViewCell", bundle: nil), forCellReuseIdentifier: "drinksCell")
    tableView.separatorStyle = UITableViewCellSeparatorStyle.none
    viewModel.error.addObserver(self) { [weak self] in
      self?.errorAlert()
    }
    
    viewModel.cocktailList.addAndNotify(observer: self) { [weak self] in
      self?.tableView.reloadData()
    }
    
    viewModel.isLoading.addObserver(self) {
      print(self.viewModel.isLoading.value ? "esta cargando" : "finalizo")
    }
    
  }
  
  func errorAlert() {
    let alert = simpleAlert(title: "Error", message: "Error fetching information")
    present(alert, animated: true, completion: nil)
  }
  
  
  // MARK: - Table view data source
  override func numberOfSections(in tableView: UITableView) -> Int {
    return 1
  }
  
  override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
    return viewModel.cocktailList.value.count
  }
  
  override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
    let cell = tableView.dequeueReusableCell(withIdentifier: "drinksCell", for: indexPath) as! DrinksTableViewCell
    let cocktail = viewModel.cocktailList.value[indexPath.row]
    cell.titleLabel.text = cocktail.name
    if let url = URL(string: cocktail.thumbPath) {
      cell.drinkImage.kf.setImage(with: url)
    }
    return cell
  }
  
  override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
    let cokctailID = viewModel.cocktailList.value[indexPath.row].id
    viewModel.fetchSingleCocktail(byId: cokctailID) { [unowned self] (_) in
      let destViewController = self.storyboard?.instantiateViewController(withIdentifier: "destViewController") as! CocktailDetailsViewController
      self.navigationController?.pushViewController(destViewController, animated: true)
    }
  }
}

extension CocktailsTableViewController: StoryboardInstantiatable {}

