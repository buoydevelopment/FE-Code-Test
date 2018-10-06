//
//  ListDataInteractor.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

protocol ListDataBusinessLogic {
    func getListOfItems(request: ListDataModels.List.Request)
    
}

class ListDataInteractor: ListDataBusinessLogic {
    
    var presenter: ListDataPresentationLogic?
    
    let listDataWorker: DataWorkerProtocol = DataWorker()
    
    func getListOfItems(request: ListDataModels.List.Request) {
        listDataWorker.getAllItems { [weak self] (result, error) in
            
            if let `self` = self, let presenter = `self`.presenter {
                guard let responseData = result as? [Drink] else {
                    let response = ListDataModels.List.Response(result: nil, errorMessage: error.debugDescription)
                    presenter.presentErrorMsg(response: response)
                    return
                    
                }
                
                let response = ListDataModels.List.Response(result: responseData, errorMessage: nil)
                presenter.presentItems(response: response)
            }
        }
    }
}
