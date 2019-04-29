package com.granitosdearena.matiaslev.cocktails

import android.app.Application
import com.granitosdearena.matiaslev.cocktails.presentation.appModule
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.core.context.startKoin

class CocktailsApp: Application() {
    override fun onCreate() {
        super.onCreate()
        startKoin {
            androidLogger()
            androidContext(this@CocktailsApp)
            modules(appModule)
        }
    }
}