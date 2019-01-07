package com.hattrick.fecodetest

import android.app.Application
import io.reactivex.plugins.RxJavaPlugins
import timber.log.Timber

class App: Application() {

    companion object {
        lateinit var instance: App
            private set
    }

    override fun onCreate() {
        super.onCreate()

        instance = this
        initTimber()
        initErrorRxHandler()
    }

    private fun initTimber() {
        if (BuildConfig.DEBUG) {
            Timber.plant(Timber.DebugTree())
        }
    }

    private fun initErrorRxHandler() {
        RxJavaPlugins.setErrorHandler { error -> Timber.e(error) }
        RxJavaPlugins.lockdown()
    }

}