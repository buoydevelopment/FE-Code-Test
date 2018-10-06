//
//  ListsAPIClient.swift
//  Rappi-Test
//
//  Created by Marcelo Perretta on 24/08/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

// MARK: - API extension

extension APIClient {
    
    /// Retrieves the top messages
    ///
    /// - parameter callback:     The service path.
    func getAllItems(withCallBack callback: @escaping ([Drink]?, Error?) -> Void){
        
        let requestPath = Constants.listOfDrinksPath
        let headersDic = Constants.defaultHeadersRequests
        let query = Constants.listOfDrinksQuery
        
        
        APIClient.sharedInstance.executeRequest(path:requestPath,
                                                queryString: APIClient.queryString(fromParameters: query), headers: headersDic) { (responseRequest, error) in
                                                    
                                                    if let data = responseRequest {
                                                        do {
                                                            let result = try JSONDecoder().decode(DrinksResponse.self, from: data)
                                                            if let drinks = result.drinks {
                                                                callback(drinks, nil)
                                                            } else {
                                                                callback(nil, Constants.defaultError)
                                                            }
                                                            
                                                        } catch {
                                                            callback(nil, error)
                                                        }
                                                    } else {
                                                        callback(nil, Constants.defaultError)
                                                    }
        }
    }
}
