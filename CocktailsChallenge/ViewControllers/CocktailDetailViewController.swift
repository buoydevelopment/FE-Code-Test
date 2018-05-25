//
//  CocktailDetailViewController.swift
//  CocktailsChallenge
//
//  Created by Martin Gonzalez vega on 23/5/18.
//  Copyright © 2018 tincho. All rights reserved.
//

import UIKit
import Kingfisher

class CocktailDetailViewController: UIViewController {

    // MARK: inputCallbacks
    var cocktailDetailHandler: (() -> Cocktail)?

    // MARK: IBOutlet
    @IBOutlet weak var viewContainer: UIView!
    @IBOutlet weak var imageCocktail: UIImageView!
    @IBOutlet weak var labelInstructions: UILabel!
    @IBOutlet weak var labelTitle: UILabel!
    @IBOutlet weak var textviewIngredients: UITextView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        setupUI()

        navigationItem.largeTitleDisplayMode = .never

        if let cocktail = cocktailDetailHandler?() {

            if let url = URL(string: cocktail.thumbUrl) {
                let processor = RoundCornerImageProcessor(cornerRadius: 30)
                let resource = ImageResource(downloadURL: url, cacheKey: cocktail.thumbUrl)
                self.imageCocktail.kf.indicatorType = .activity
                self.imageCocktail.kf.setImage(with: resource, options: [.processor(processor)])
            }

            self.labelTitle?.text = "• \("HowToPrepare".translate())"
            self.labelTitle?.textColor = Constants.color.textLightGrey

            if cocktail.instructions == nil {
                Cocktail.queryDetail(cocktail: cocktail, completion: { (cocktailWithDetail, error) in
                    if cocktailWithDetail != nil {
                        self.labelInstructions?.text = cocktailWithDetail!.instructions
                        self.textviewIngredients?.text = cocktailWithDetail!.ingredientsMesures
                    }
                })
            } else {
                self.labelInstructions?.text = cocktail.instructions
                self.textviewIngredients?.text = cocktail.ingredientsMesures
            }

            self.labelInstructions?.textColor = Constants.color.textLightGrey
            self.textviewIngredients?.textColor = Constants.color.textLightGrey
        }
    }
}
