//
//  AppDelegate.swift
//  OneWay-Architecture
//
//  Created by Mac Ward on 17/03/2018.
//  Copyright © 2018 Mac Ward. All rights reserved.
//

import UIKit
import Dip
import Dip_UI

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

  var window: UIWindow?
  var container: DependencyContainer!
  
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {
    
    NetworkMonitor.sharedInstance.monitorInternetConnectionEstablished()
    container = DependencyResolver.shared.configure()
    DependencyContainer.uiContainers = [container]
    
    return true
  }

  func applicationWillResignActive(_ application: UIApplication) {
  }

  func applicationDidEnterBackground(_ application: UIApplication) {
  }

  func applicationWillEnterForeground(_ application: UIApplication) {
  }

  func applicationDidBecomeActive(_ application: UIApplication) {
  }

  func applicationWillTerminate(_ application: UIApplication) {
  }
  
}

