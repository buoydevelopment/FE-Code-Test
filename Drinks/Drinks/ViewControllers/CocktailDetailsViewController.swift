//
//  CocktailDetailsViewController.swift
//  Drinks
//
//  Created by Mac Ward on 21/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import UIKit
import Dip
import Dip_UI
import PinLayout
import Kingfisher

class CocktailDetailsViewController: UIViewController {
  
  @IBOutlet weak var scrollView: UIScrollView!
  @IBOutlet weak var drinkImage: UIImageView!
  @IBOutlet weak var contentView: UIView!
  @IBOutlet weak var nameLabel: UILabel!
  @IBOutlet weak var instructionsLabel: UILabel!
  @IBOutlet weak var ingredientsStack: UIStackView!
  
  var cocktailDetails: CocktailDetails!
  
  override func viewDidLoad() {
    super.viewDidLoad()
    self.title = cocktailDetails.name
    view.backgroundColor = AppColor.MainGreen
    //nameLabel.text = cocktailDetails.name
    instructionsLabel.text = cocktailDetails.instructions
    print(cocktailDetails.ingredients)
  }
  
  override func didReceiveMemoryWarning() {
    super.didReceiveMemoryWarning()
  }

}

extension CocktailDetailsViewController: StoryboardInstantiatable { }
