//
//  DetailAPIClient.swift
//  Rappi-Test
//
//  Created by Marcelo Perretta on 25/08/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

// MARK: - API extension

extension APIClient {
    
    /// Retrieves the top messages
    ///
    /// - parameter itemID:       The item identifier
    /// - parameter callback:     The service path.
    func getDetailItem(ofItemID itemID: String, andCallBack callback: @escaping (DrinkDetailResponse?, Error?) -> Void){
        
        let requestPath = Constants.detailOfDrinkPath
        let headersDic = Constants.defaultHeadersRequests
        let query = ["i": itemID]
        
        
        APIClient.sharedInstance.executeRequest(path:requestPath,
                                                queryString: APIClient.queryString(fromParameters: query), headers: headersDic) { (responseRequest, error) in
                                                    
                                                    if let data = responseRequest {
                                                        do {
                                                            let result = try JSONDecoder().decode(DrinkDetailResponse.self, from: data)
                                                            callback(result, nil)
                                                        } catch {
                                                            callback(nil, error)
                                                        }
                                                    } else {
                                                        callback(nil, Constants.defaultError)
                                                    }
        }
    }
}
