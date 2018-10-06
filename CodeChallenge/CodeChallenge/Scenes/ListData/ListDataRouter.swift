//
//  ListDataRouter.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit


protocol ListDataRoutingLogic {
    func routeToItemDetail(withItem item: ListDataModels.List.ViewModel.DisplayedItem)
}

class ListDataRouter: NSObject, ListDataRoutingLogic {
    
    weak var viewController: ListDataViewController?
    
    func routeToItemDetail(withItem item: ListDataModels.List.ViewModel.DisplayedItem) {
        if let detailItemVC = DetailDataViewController.create() as? DetailDataViewController {
            
            let detailData = DetailDataModels.Detail.ViewModel(ID: item.ID, title: item.title, posterURL: item.posterURL, instructions: [], errorMessage: nil)
            detailItemVC.itemDetail = detailData
            
            viewController?.navigationController?.pushViewController(detailItemVC, animated: true)
        }
    }
    
    
}
