package com.buoy.codetest

import android.app.Application
import com.buoy.codetest.system.injection.networkModule
import com.buoy.codetest.system.injection.repositoryModule
import com.buoy.codetest.system.injection.viewModelModule
import org.koin.android.ext.koin.androidContext
import org.koin.android.ext.koin.androidLogger
import org.koin.core.context.startKoin

class CodeTestApplication: Application() {

    override fun onCreate() {
        super.onCreate()

        startKoin{
            androidLogger()
            androidContext(this@CodeTestApplication)
            modules(listOf(repositoryModule, networkModule, viewModelModule))
        }
    }

}