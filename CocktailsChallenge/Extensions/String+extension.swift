//
//  String+extension.swift
//  CocktailsChallenge
//
//  Created by Martin Gonzalez vega on 23/5/18.
//  Copyright © 2018 tincho. All rights reserved.
//
import UIKit

extension String {
    func translate() -> String {
        return NSLocalizedString(self, comment: "")
    }
}
