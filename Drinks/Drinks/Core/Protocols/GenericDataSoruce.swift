//
//  GenericDataSoruce.swift
//  Drinks
//
//  Created by Mac Ward on 21/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation
import UIKit

class GenericDataSource<T> : NSObject {
  var data: DynamicValue<[T]> = DynamicValue([])
}

