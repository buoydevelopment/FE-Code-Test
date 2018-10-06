//
//  Constants.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import Foundation

struct App {
    static let shared = App()
    static let infoPath = Bundle.main.path(forResource: "Info", ofType: ".plist")
    let configDictionary = NSDictionary(contentsOfFile: infoPath ?? "")
    
    static func getValueFromInfoPlist(with key: String) -> String {
        guard let dictionary = App.shared.configDictionary,
            let value = dictionary[key] as? String else {
                fatalError("\(key) key plist not found")
        }
        return value
    }
}

struct Constants {
    static let baseURL = App.getValueFromInfoPlist(with: "BaseURLKey")
    
    static let defaultHeadersRequests = [
        "Accept": "application/json",
        "Content-Type" :"application/json;charset=utf-8"
    ]
    
    static let defaultError = NSError.error(domain: APIClientErrorDomain,
                                    code: APIClientErrorUnsuccessfulRequest,
                                    description: "Unsuccessful parse data")
    
    //MARK: List Of Drinks
    static let listOfDrinksPath = "filter.php"
    static let listOfDrinksQuery = ["g": "Cocktail_glass"]
    
    //MARK: Detail Of Drink
    static let detailOfDrinkPath = "lookup.php"
}
