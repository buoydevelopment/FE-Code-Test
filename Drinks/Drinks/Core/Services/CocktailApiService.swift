//
//  CocktailApiService.swift
//  Drinks
//
//  Created by Mac Ward on 21/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation
import Alamofire
import CodableAlamofire
import SwiftyJSON

typealias ApiResponseStatus = Bool
typealias ApiResponseCocktailList = (CocktailList?, ApiRequestStatus) -> Void
typealias ApiResponseCokctailDetails = (CocktailDetails?, Error?) -> Void
typealias ApiResponseCokctailDetails2 = (CocktailDetails?, ApiRequestStatus) -> Void

class CocktailApiService {
  
  func fetch(completion:@escaping ApiResponseCocktailList) {
    Alamofire.request(CocktailsEndpoint.fetch())
      .responseDecodableObject { (response: DataResponse<CocktailList>) in
        switch response.result {
        case .success(let value):
          completion(value, ApiRequestStatus.Success)
        case .failure:
          completion(nil, ApiRequestStatus.Failure)
        }
    }
  }
  
  
  func fetchById(id: String, completion:@escaping ApiResponseCokctailDetails) {
    Alamofire.request(CocktailsEndpoint.fetchByID(id: id)).responseJSON { (response) in
      switch response.result {
      case .success(let value):
        let json = JSON(value)
        
        guard let details = json["drinks"].arrayValue.first else {
          completion(nil, ApiRequestError.CannotFetch("Error fetching object"))
          return
        }
        let data = CocktailDataModel(details.dictionaryValue)
        completion(data.cocktailDetails, nil)
      case .failure(let error):
        completion(nil, error)
      }
    }
  }
  
}
