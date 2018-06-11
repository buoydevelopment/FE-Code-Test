//
//  CocktailsEndpoint.swift
//  Drinks
//
//  Created by Mac Ward on 21/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Alamofire
import Foundation

enum CocktailsEndpoint: URLRequestConvertible {
  
  case fetch()
  case fetchByID(id: String)
  
  // MARK: - HTTPMethod
  var method: HTTPMethod {
    return .get
  }
  
  // MARK: - Path
  var path: String {
    switch self {
    case .fetch():
      return "/filter.php"
    case .fetchByID(_):
      return "/lookup.php"
    }
  }
  
  // MARK: - URLRequestConvertible
  func asURLRequest() throws -> URLRequest {
    let url = try Server.baseURL.asURL()
    
    var urlRequest = URLRequest(url: url.appendingPathComponent(path))
    
    // HTTP Method
    urlRequest.httpMethod = method.rawValue
    
    // Common Headers
    urlRequest.setValue(ContentType.json.rawValue, forHTTPHeaderField: HTTPHeaderField.acceptType.rawValue)
    urlRequest.setValue(ContentType.json.rawValue, forHTTPHeaderField: HTTPHeaderField.contentType.rawValue)
    
    switch self {      
    case .fetch:
      return try Alamofire.URLEncoding.default.encode(urlRequest, with: ["g":"Cocktail_glass"])
      
    case .fetchByID(let id):
      return try Alamofire.URLEncoding.default.encode(urlRequest, with: ["i":id])
    }
  }
}
