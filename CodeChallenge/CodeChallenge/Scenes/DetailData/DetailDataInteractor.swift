//
//  DetailDataInteractor.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

protocol DetailDataBusinessLogic {
    func getDetailOfItem(request: DetailDataModels.Detail.Request)
}

class DetailDataInteractor: DetailDataBusinessLogic {
    
    var presenter: DetailDataPresentationLogic?
    
    let detailDataWorker: DataWorkerProtocol = DataWorker()
    
    func getDetailOfItem(request: DetailDataModels.Detail.Request) {
        detailDataWorker.getDetailItem(ofItemID: request.itemID) { [weak self] (result, error) in
            
            if let `self` = self, let presenter = `self`.presenter {
            
                guard let responseData = result, let data = responseData.drinks?.first else {
                    let response = DetailDataModels.Detail.Response(resultDetail: nil, errorMessage: "Error Parsing data")
                    presenter.presentErrorMsg(response: response)
                    return

                }
                
                let drinkID = data["idDrink"] ?? ""
                let title = data["strDrink"] ?? ""
                let imageURL = data["strDrinkThumb"] ?? ""
                
                var instructions: [String] = []
                for index in 1...15 {
                    if let ingredient = data["strIngredient\(index)"] as? String, let measure = data["strMeasure\(index)"] as? String, !ingredient.isEmpty, !measure.isEmpty{
                        instructions.append("\(measure) - \(ingredient)")
                    }
                }
                                
                if let steps = data["strInstructions"] as? String {
                    instructions.append("\n* How to prepare\n\n \(steps)")
                }
                
                let detailDrink = DrinkDetail(drinkID: drinkID, title: title, imageURL: imageURL, instructions: instructions)

                let response = DetailDataModels.Detail.Response(resultDetail: detailDrink, errorMessage: nil)
                presenter.presentItemDetail(response: response)
            }
        }
    }

}
