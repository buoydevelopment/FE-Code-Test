//
//  DetailDataPresenter.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

protocol DetailDataPresentationLogic {
    func presentItemDetail(response: DetailDataModels.Detail.Response)
    func presentErrorMsg(response: DetailDataModels.Detail.Response)
}

class DetailDataPresenter: DetailDataPresentationLogic {
    weak var viewController: DetailDataDisplayLogic?
    
    func presentItemDetail(response: DetailDataModels.Detail.Response) {
        
        guard response.errorMessage == nil, let detailData = response.resultDetail else {
            presentErrorMsg(response: DetailDataModels.Detail.Response(resultDetail: nil, errorMessage: response.errorMessage!))
            return
        }
        
        let itemID = detailData.drinkID ?? ""
        let title = detailData.title ?? ""
        let posterURL = detailData.imageURL ?? ""
        let instructions = detailData.instructions ?? []
        
        let viewModel = DetailDataModels.Detail.ViewModel(ID: itemID, title: title, posterURL: posterURL, instructions: instructions, errorMessage: nil)
        viewController?.displayItem(viewModel: viewModel)
    }
    
    func presentErrorMsg(response: DetailDataModels.Detail.Response) {
        let viewModel = DetailDataModels.Detail.ViewModel(ID: "", title: "", posterURL: "", instructions: [""], errorMessage: response.errorMessage ?? "An error Occur. Please, try again later")
        viewController?.displayErrorGettingItems(viewModel: viewModel)
    }
    
}
