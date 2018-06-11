//
//  Constants.swift
//  Drinks
//
//  Created by Mac Ward on 21/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation

struct Server {
  static let baseURL = "https://www.thecocktaildb.com/api/json/v1/1"
}

enum ApiRequestError: Error {
  case CannotFetch(String)
  case CannotCreate(String)
  case CannotUpdate(String)
  case CannotDelete(String)
}

enum ApiRequestStatus {
  case Success
  case Failure
}

enum HTTPHeaderField: String {
  case authentication = "Authorization"
  case contentType = "Content-Type"
  case acceptType = "Accept"
  case acceptEncoding = "Accept-Encoding"
}

enum ContentType: String {
  case json = "application/json"
}
