//
//  Constants.swift
//  CocktailsChallenge
//
//  Created by Martin Gonzalez vega on 23/5/18.
//  Copyright © 2018 tincho. All rights reserved.
//
import UIKit

struct Constants {

    struct color {
        static let mainLightBlue = UIColor(red:0.325, green:0.737, blue:0.816, alpha:1.00)
        static let textLightGrey = UIColor(red:0.667, green:0.667, blue:0.667 , alpha:1.00)
    }

    struct segues {
        static let toCocktailDetail = "toCocktailDetail"
    }

    struct url {
        static let base = "https://www.thecocktaildb.com/api/json/v1/1/"

        struct cocktail {
            static let all = "\(base)filter.php?g=Cocktail_glass"
            static let detail = "\(base)lookup.php?i=%@"
        }
    }
}
