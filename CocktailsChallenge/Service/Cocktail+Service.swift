//
//  Cocktail+query.swift
//  CocktailsChallenge
//
//  Created by Martin Gonzalez vega on 23/5/18.
//  Copyright © 2018 tincho. All rights reserved.
//

import Alamofire

extension Cocktail {

    static func queryAll(completion: @escaping (_ result: [Cocktail]?, _ error: String?) -> Void) {
        let url = Constants.url.cocktail.all

        Alamofire.request(url, method: .get,headers:nil)
            .responseJSON { (response) in

                if let json = response.result.value as? [String:Any]{

                    if let drinksNode = json["drinks"] as? [[String:String]] {
                        var resultArray : [Cocktail] = []
                        for cocktailNode in drinksNode{

                            if let idDrink = cocktailNode["idDrink"] {
                                var cocktail = Cocktail( name: "", thumbUrl: "", idDrink: idDrink, instructions: nil, ingredients: nil, measures: nil)
                                if let strDrink = cocktailNode["strDrink"] {
                                    cocktail.name = strDrink
                                }
                                if let strDrinkThumb = cocktailNode["strDrinkThumb"] {
                                    cocktail.thumbUrl = strDrinkThumb
                                }
                                resultArray.append(cocktail)
                            }

                        }
                        completion(resultArray,nil)
                    }

                }else {
                    completion(nil,response.error?.localizedDescription)
                }
        }
    }

    static func queryDetail(cocktail: Cocktail, completion: @escaping (_ result: Cocktail?, _ error: String?) -> Void) {

        var resultCocktail = cocktail
        let url = Constants.url.cocktail.detail.replacingOccurrences(of: "%@", with: cocktail.idDrink)

        Alamofire.request(url, method: .get,headers:nil)
            .responseJSON { (response) in

                if let json = response.result.value as? [String:Any]{

                    if let drinksNode = json["drinks"] as? [[String:Any]] {
                        for drinkNode in drinksNode{
                            if let strInstructions = drinkNode["strInstructions"] as? String {
                                resultCocktail.instructions = strInstructions
                            }

                            let maxIngredients = 15
                            var ingredientIndex = 0
                            repeat {
                                if let strIngredientN = drinkNode["strIngredient\(ingredientIndex)"] as? String {

                                    if strIngredientN != "" {
                                        if resultCocktail.ingredients == nil {
                                            resultCocktail.ingredients = []
                                        }
                                        resultCocktail.ingredients?.append(strIngredientN)
                                    }
                                }
                                if let strMeasureN = drinkNode["strMeasure\(ingredientIndex)"] as? String {

                                    if strMeasureN != "" {
                                        if resultCocktail.measures == nil {
                                            resultCocktail.measures = []
                                        }
                                        resultCocktail.measures?.append(strMeasureN)
                                    }
                                }

                                ingredientIndex += 1

                            } while ingredientIndex < maxIngredients

                        }
                        completion(resultCocktail,nil)
                    }
                }else {
                    completion(nil,response.error?.localizedDescription)
                }
        }
    }
}
