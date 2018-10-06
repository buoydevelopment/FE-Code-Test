//
//  DrinkDetail.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

struct DrinkDetailResponse: Codable {
    let drinks: [[String: String?]]?
}

struct DrinkDetail {
    let drinkID: String?
    let title: String?
    let imageURL: String?
    let instructions: [String]?
}
