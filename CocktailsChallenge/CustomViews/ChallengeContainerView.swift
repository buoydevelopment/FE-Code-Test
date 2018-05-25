//
//  ChallengeContainerView.swift
//  CocktailsChallenge
//
//  Created by Martin Gonzalez vega on 24/5/18.
//  Copyright © 2018 tincho. All rights reserved.
//

import UIKit

class ChallengeContainerView : UIView {

    var shadowAdded: Bool = false
    
    override init(frame: CGRect) {
        super.init(frame: frame)
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
    }

    @IBInspectable var cornerRadius: CGFloat =  0 {
        didSet {
            layer.cornerRadius = cornerRadius
            layer.masksToBounds = cornerRadius > 0
        }
    }

    override func draw(_ rect: CGRect) {
        super.draw(rect)

        if shadowAdded { return }
        shadowAdded = true

        let shadowLayer = UIView(frame: frame)
        shadowLayer.backgroundColor = UIColor.clear
        shadowLayer.layer.shadowColor = UIColor.darkGray.cgColor
        shadowLayer.layer.shadowPath = UIBezierPath(roundedRect: bounds, cornerRadius: cornerRadius).cgPath
        shadowLayer.layer.shadowOffset = CGSize(width: 1.0, height: 1.0)
        shadowLayer.layer.shadowOpacity = 0.5
        shadowLayer.layer.shadowRadius = 1
        shadowLayer.layer.masksToBounds = true
        shadowLayer.clipsToBounds = false

        superview?.addSubview(shadowLayer)
        superview?.bringSubview(toFront: self)
    }
}
