//
//  CocktailDataModel.swift
//  Drinks
//
//  Created by Mac Ward on 24/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation
import SwiftyJSON

class CocktailDataModel: NSObject {
  //let item: CocktailDetails
  let dic: [String: JSON]!
  
  init(_ dict: [String: JSON]) {
    self.dic = dict
  }
  
  var drinkId: String {
    return dic["idDrink"]?.stringValue ?? ""
  }
  
  var drinkName: String {
    return dic["strDrink"]?.stringValue ?? ""
  }
  
  var thumbPath: String {
    return dic["strDrinkThumb"]?.stringValue ?? ""
  }
  
  var instructions: String {
    return dic["strInstructions"]?.stringValue ?? ""
  }
  
  var glass: String {
    return dic["strGlass"]?.stringValue ?? ""
  }
  
  var ingredients: [String:String] {
    let ingredientsPrefix = "strIngredient"
    let measurePrefix = "strMeasure"
    var tmpIngredients = [String: String]()
    
    for index in 1...15 {
      
      let ingredientsIndex = "\(ingredientsPrefix)\(index)"
      let measuresIndex = "\(measurePrefix)\(index)"
      
      if dic[ingredientsIndex] != nil,
        let ingredient = dic[ingredientsIndex]?.stringValue,
        ingredient != "",
        let measure = dic[measuresIndex]?.stringValue,
        measure != "" {
        tmpIngredients[ingredient] = measure
      }
      
    }
    return tmpIngredients
  }
  
  var cocktailDetails: CocktailDetails {
    return CocktailDetails(id: drinkId, name: self.drinkName, instructions: self.instructions, ingredients: self.ingredients, glass: self.glass)
  }
  
}
