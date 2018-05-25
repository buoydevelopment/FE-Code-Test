//
//  CocktailCell.swift
//  CocktailsChallenge
//
//  Created by Martin Gonzalez vega on 23/5/18.
//  Copyright © 2018 tincho. All rights reserved.
//

import UIKit
import Kingfisher

class CocktailCell: UITableViewCell {

    @IBOutlet weak var imageCocktail: UIImageView!
    @IBOutlet private weak var labelInstructions: UILabel!
    @IBOutlet weak var labelCocktailTitle: UILabel!
    @IBOutlet weak var containerView: UIView!
    @IBOutlet weak var activityIndicator: UIActivityIndicatorView!
    
    var labelInstructionsText : String? {
        didSet {
            labelInstructions?.text = labelInstructionsText
            activityIndicator.stopAnimating()
        }
    }

    override init(style: UITableViewCellStyle, reuseIdentifier: String?) {
        super.init(style: style, reuseIdentifier: reuseIdentifier)
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }

    override func awakeFromNib() {
        contentView.backgroundColor = Constants.color.mainLightBlue
        selectionStyle = .none
        labelInstructions.textColor = Constants.color.textLightGrey        
    }

    override func prepareForReuse() {
        super.prepareForReuse()
        imageCocktail.kf.cancelDownloadTask()
    }
}
