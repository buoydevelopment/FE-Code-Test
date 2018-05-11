package com.aarr.fecodetest

import android.app.Application
import android.content.Context

/**
 * Created by andresrodriguez on 5/10/18.
 */
class MainApplication : Application() {

    override fun onCreate() {
        super.onCreate()
        MainApplication.appContext = applicationContext
    }

    companion object {
        var appContext: Context? = null
            private set
    }

}