//
//  DependencyResolver.swift
//  Drinks
//
//  Created by Mac Ward on 25/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation
import UIKit
import Dip
import Dip_UI

class DependencyResolver {
  
  static let shared = DependencyResolver()
  
  var container: DependencyContainer!
  
  func configure() -> DependencyContainer {
    container = DependencyContainer { container in
      
    }
    
    return container
  }
  
  func configureCocktailDetails(cocktailDetails: CocktailDetails) {
    container = DependencyContainer { container in
      container.register { cocktailDetails }
      
      container.register(storyboardType: CocktailDetailsViewController.self, tag: "myVC").resolvingProperties({ (container, controller) in
        controller.cocktailDetails = cocktailDetails
      })
    }
    DependencyContainer.uiContainers = [container]
  }
  
}
