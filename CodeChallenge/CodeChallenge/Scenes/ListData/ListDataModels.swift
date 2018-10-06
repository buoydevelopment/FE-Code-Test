//
//  ListDataModels.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

enum ListDataModels {
    
    // MARK: Use cases
    
    enum List
    {
        struct Request
        {
        }
        struct Response
        {
            var result: [Drink]?
            var errorMessage: String?
        }
        struct ViewModel
        {
            struct DisplayedItem {
                var ID: String
                var title: String
                var posterURL: String
            }
            
            var displayedItems: [DisplayedItem]
            var errorMessage: String?
        }
    }
}
