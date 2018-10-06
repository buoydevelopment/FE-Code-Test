//
//  ListDataTableViewCell.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

class ListDataTableViewCell: UITableViewCell {
    
    @IBOutlet weak var posterImageView: UIImageView!
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var itemIDLabel: UILabel!
    
    var item: ListDataModels.List.ViewModel.DisplayedItem? {
        didSet {
            if let itemData = item {
                self.titleLabel.text = itemData.title
                self.itemIDLabel.text = itemData.ID
                
                posterImageView.downloadedFrom(link: itemData.posterURL)
            }
        }
    }
    
    override func prepareForReuse() {
        self.posterImageView.image = nil
    }
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
