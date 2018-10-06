//
//  Drink.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import Foundation

struct DrinksResponse: Codable {
    let drinks: [Drink]?
}

struct Drink: Codable {
    let strDrink: String?
    let strDrinkThumb: String?
    let idDrink: String?
}
