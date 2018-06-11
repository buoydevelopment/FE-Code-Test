//
//  CocktailDetails.swift
//  Drinks
//
//  Created by Mac Ward on 22/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation
import UIKit
import RealmSwift

struct CocktailDetails {
  
  var id: String
  var name: String
  var instructions: String
  var ingredients: [String: String]
  var glass: String
  var imagePath: String
}

final public class CocktailDetailsObject: Object {
  @objc dynamic var id = 0
  @objc dynamic var name = ""
  @objc dynamic var instructions = ""
  @objc dynamic var glass = ""
  @objc dynamic var imagePath = ""
  @objc dynamic var ingredientsData: NSData?
  var ingredients: [String: String] {
    get {
      guard let ingredientsData = ingredientsData else {
        return [String: String]()
      }
      do {
        let dict = try JSONSerialization.jsonObject(with: ingredientsData as Data, options: []) as? [String: String]
        return dict!
      } catch {
        return [String: String]()
      }
    }
    
    set {
      do {
        let data = try JSONSerialization.data(withJSONObject: newValue, options: [])
        ingredientsData = data as NSData
      } catch {
        ingredientsData = nil
      }
    }
  }
  override public static func primaryKey() -> String? {
    return "id"
  }
  
  override public static func ignoredProperties() -> [String] {
    return ["ingredients"]
  }
}

extension CocktailDetails: Persistable {
  public init(managedObject: CocktailDetailsObject) {
    id = String(managedObject.id)
    name = managedObject.name
    instructions = managedObject.instructions
    glass = managedObject.glass
    ingredients = managedObject.ingredients
    imagePath = managedObject.imagePath
  }
  
  public func managedObject() -> CocktailDetailsObject {
    let cocktailObject = CocktailDetailsObject()
    cocktailObject.id = Int(id) ?? 0
    cocktailObject.name = name
    cocktailObject.instructions = instructions
    cocktailObject.glass = glass
    
    return cocktailObject
  }
}
