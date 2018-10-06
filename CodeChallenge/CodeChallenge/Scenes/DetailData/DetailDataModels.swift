//
//  DetailDataModels.swift
//  CodeChallenge
//
//  Created by Marcelo Perretta on 05/10/2018.
//  Copyright © 2018 MAWAPE. All rights reserved.
//

import UIKit

enum DetailDataModels {
    
    // MARK: Use cases
    
    enum Detail
    {
        struct Request
        {
            var itemID: String
        }
        struct Response
        {
            var resultDetail: DrinkDetail?
            var errorMessage: String?
        }
        struct ViewModel
        {   
            var ID: String
            var title: String
            var posterURL: String
            var instructions: [String]
            var errorMessage: String?
        }
    }
}
