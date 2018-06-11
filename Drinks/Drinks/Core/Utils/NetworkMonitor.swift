//
//  NetworkMonitor.swift
//  Drinks
//
//  Created by Mac Ward on 23/04/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import Foundation
import Reachability

class NetworkMonitor: NSObject {
  
  static let sharedInstance = NetworkMonitor()
  
  var internetConnectionIsEstablished: Bool = false
  let reachability = Reachability()
  
  func monitorInternetConnectionEstablished() {
    
    reachability?.whenReachable = { [unowned self] reachability in
      print("Internet connection established")
      self.internetConnectionIsEstablished = true
    }
    reachability?.whenUnreachable = { [unowned self] reachability in
      print("Internet connection unavailable")
      self.internetConnectionIsEstablished = false
    }
    
    do {
      try reachability?.startNotifier()
    } catch {
      print("Unable to start notifier")
    }
  }
  
  func stopMonitoringInternetConnectionIsEstablished() {
    reachability?.stopNotifier()
  }
}
