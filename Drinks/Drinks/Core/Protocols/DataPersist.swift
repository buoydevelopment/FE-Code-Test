//
//  DataPersist.swift
//  Drinks
//
//  Created by Mac Ward on 30/05/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation
import RealmSwift

public protocol Persistable {
  associatedtype ManagedObject: Object
  init(managedObject: ManagedObject)
  func managedObject() -> ManagedObject
}
