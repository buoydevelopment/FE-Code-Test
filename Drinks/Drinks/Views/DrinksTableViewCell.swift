//
//  DrinksTableViewCell.swift
//  Drinks
//
//  Created by Mac Ward on 10/06/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import UIKit

class DrinksTableViewCell: UITableViewCell {

  @IBOutlet weak var titleLabel: UILabel!
  @IBOutlet weak var drinkImage: UIImageView!
  override func awakeFromNib() {
    super.awakeFromNib()
  }

  override func setSelected(_ selected: Bool, animated: Bool) {
    super.setSelected(selected, animated: animated)
  }

}
