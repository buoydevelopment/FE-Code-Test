//
//  AlertsHelper.siwft.swift
//  Drinks
//
//  Created by Mac Ward on 21/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation
import UIKit

func simpleAlert(title: String, message: String) -> UIAlertController {
  let alert = UIAlertController(title: title, message: message, preferredStyle: .alert)
  let action = UIAlertAction(title: "OK", style: UIAlertActionStyle.cancel, handler: nil)
  alert.addAction(action)
  return alert
}
