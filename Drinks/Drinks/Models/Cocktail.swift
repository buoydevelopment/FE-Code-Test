//
//  Drink.swift
//  Drinks
//
//  Created by Mac Ward on 21/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation
import RealmSwift

struct CocktailList: Codable {
  var drinks: [Cocktail]
}

struct Cocktail: Codable {
  
  var id: String
  var name: String
  var thumbPath: String
  
  enum CodingKeys: String, CodingKey {
    case id = "idDrink"
    case name = "strDrink"
    case thumbPath = "strDrinkThumb"
  }
}

final public class CocktailObject: Object {
  @objc dynamic var id = 0
  @objc dynamic var name = ""
  @objc dynamic var thumbPath = ""
  
  override public static func primaryKey() -> String? {
    return "id"
  }
}

extension Cocktail: Persistable {
  public init(managedObject: CocktailObject) {
    id = String(managedObject.id)
    name = managedObject.name
    thumbPath = managedObject.thumbPath
  }
  
  public func managedObject() -> CocktailObject {
    let cocktailObject = CocktailObject()
    cocktailObject.id = Int(id) ?? 0
    cocktailObject.name = name
    cocktailObject.thumbPath = thumbPath
    return cocktailObject
  }
}
