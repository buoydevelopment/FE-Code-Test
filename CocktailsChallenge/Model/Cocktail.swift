//
//  Cocktail.swift
//  CocktailsChallenge
//
//  Created by Martin Gonzalez vega on 23/5/18.
//  Copyright © 2018 tincho. All rights reserved.
//

struct Cocktail {
    var name : String
    var thumbUrl : String
    var idDrink : String
    var instructions : String?
    var ingredients : [String]?
    var measures: [String]?

    var ingredientsSummary : String {

        if let mainIngredients = ingredients {
            var resultString = ""
            let bulletPoint = "•"
            if mainIngredients.count > 0 {
                resultString = "\(bulletPoint) \(mainIngredients[0]) \n"
            }
            if mainIngredients.count > 1 {
                resultString += "\(bulletPoint) \(mainIngredients[1]) \n"
            }
            if mainIngredients.count > 2 {
                resultString += "IngredientsAndMore".translate().replacingOccurrences(of: "%@", with: "\(mainIngredients.count)")
            }
            return resultString
        }else {
            return ""
        }
    }

    var ingredientsMesures : String {

        if let mainIngredients = ingredients {
            var ingredientAndMesure = ""
            for index in 0..<mainIngredients.count {
                if let mainMesures = measures {
                    if mainMesures.count >= index+1 {
                        ingredientAndMesure += mainMesures[index]
                    }
                }
                ingredientAndMesure += " \(mainIngredients[index]) \n"
            }
            return ingredientAndMesure
        }else {
            return ""
        }
    }
}

