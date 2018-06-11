//
//  CocktailsViewModel.swift
//  Drinks
//
//  Created by Mac Ward on 21/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation
import Dip_UI
import Dip
import RealmSwift
import EasyRealm

class CocktailsViewModel {
  
  var cocktailList = DynamicValue<[Cocktail]>([])
  var error : DynamicValue<ApiRequestError?> = DynamicValue<ApiRequestError?>(nil)
  var isLoading = DynamicValue<Bool>(false)
  fileprivate var service = CocktailApiService()
  private let realm = try! Realm()
  
  init() {}
  
  func fetchCocktails() {
    if let cachedItems = loadCocktails(), cachedItems.count > 0 {
      self.cocktailList.value = cachedItems
      return
    } else {
      isLoading.value = true
      service.fetch { [unowned self] (cocktails, status) in
        self.isLoading.value = false
        switch status {
        case .Success:
          guard let cocktails = cocktails else { return }
          self.cocktailList.value = cocktails.drinks
          self.saveCocktails(cocktails.drinks)
        case .Failure:
          self.error.value = ApiRequestError.CannotFetch("Error fetching data")
        }
        
      }
    }
  }
  
  func fetchSingleCocktail(byId id: String, completion: @escaping (CocktailDetails?) -> Void) {
    isLoading.value = true
    service.fetchById(id: id) { (cocktail, error) in
      self.isLoading.value = false
      if error != nil {
        print(error!)
      }
      if let cocktail = cocktail {
        DependencyResolver.shared.configureCocktailDetails(cocktailDetails: cocktail)
        //try? cocktail.managedObject().er.save(update: true)
        completion(cocktail)
        return
      }
      completion(nil)
    }
  }
  
  private func saveCocktails(_ object: [Cocktail]) {
    object.forEach { (cocktail) in
      do {
        try cocktail.managedObject().er.save(update: true)
      } catch let error {
        print(error)
      }
    }
  }
  
  public func loadCocktails() -> [Cocktail]? {
    do {
      let cocktails = try CocktailObject.er.all()
      var arr = [Cocktail]()
      cocktails.forEach { (item) in
        arr.append(Cocktail(id: String(item.id), name: item.name, thumbPath: item.thumbPath))
      }
      return arr
    } catch {
      print("error fetching information from realm database")
      return nil
    }
  }
  
  private func loadCocktail(byId id: Int) -> CocktailDetails? {
    do {
      let object = try CocktailDetailsObject.er.fromRealm(with: id)
      return CocktailDetails(id: String(object.id), name: object.name, instructions: object.instructions, ingredients: object.ingredients, glass: object.glass)
    } catch {
      print("no cocktail in cache")
      return nil
    }
  }
  
}
