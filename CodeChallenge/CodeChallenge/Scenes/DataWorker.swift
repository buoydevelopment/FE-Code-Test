//
//  ListDataWorker.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

protocol DataWorkerProtocol: class {
    func getAllItems(withCallBack callback: @escaping (Any, Error?) -> Void)
    
    func getDetailItem(ofItemID itemID: String, andCallBack callback: @escaping (DrinkDetailResponse?, Error?) -> Void)
}

class DataWorker: DataWorkerProtocol {
    
    func getAllItems(withCallBack callback: @escaping (Any, Error?) -> Void) {
        APIClient.sharedInstance.getAllItems { (result, error) in
            
            guard let responseRequest = result, error == nil else {
                callback([Drink](), error)
                return
            }
        
            
            callback(responseRequest, error)
        }
    }
    
    func getDetailItem(ofItemID itemID: String, andCallBack callback: @escaping (DrinkDetailResponse?, Error?) -> Void) {
        APIClient.sharedInstance.getDetailItem(ofItemID: itemID) { (result, error) in
            guard let responseRequest = result, error == nil else {
                callback(nil, error)
                return
            }
            
            callback(responseRequest, error)
        }
    }
}
