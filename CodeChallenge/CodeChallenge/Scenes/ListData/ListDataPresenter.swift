//
//  ListDataPresenter.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

protocol ListDataPresentationLogic {
    func presentItems(response: ListDataModels.List.Response)
    func presentErrorMsg(response: ListDataModels.List.Response)
    
}

class ListDataPresenter: ListDataPresentationLogic {
    
    weak var viewController: ListDataDisplayLogic?
    
    func presentItems(response: ListDataModels.List.Response) {
        
        guard let items = response.result else {
            let viewModel = ListDataModels.List.ViewModel(displayedItems: [ListDataModels.List.ViewModel.DisplayedItem](), errorMessage: "No Data")
            viewController?.displayErrorGettingItems(viewModel: viewModel)
            return
        }
        
        var displayedItems: [ListDataModels.List.ViewModel.DisplayedItem] = []
        for item in items {
        
            let itemID = item.idDrink ?? ""
            let title = item.strDrink ?? ""
            let posterURL = item.strDrinkThumb ?? ""
            
            let displayedItem = ListDataModels.List.ViewModel.DisplayedItem(ID: itemID, title: title, posterURL: posterURL)
            displayedItems.append(displayedItem)
        }
        
        let viewModel = ListDataModels.List.ViewModel(displayedItems: displayedItems, errorMessage: nil)
        viewController?.displayItems(viewModel: viewModel)
        
    }
    
    func presentErrorMsg(response: ListDataModels.List.Response) {
        let viewModel = ListDataModels.List.ViewModel(displayedItems: [ListDataModels.List.ViewModel.DisplayedItem](), errorMessage: response.errorMessage)
        viewController?.displayErrorGettingItems(viewModel: viewModel)
    }

}
