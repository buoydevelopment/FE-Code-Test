package com.kimboo.androidjobsnewsletter.di.module

import android.content.Context
import com.kimboo.mvvmkotlin.MyApp
import dagger.Module
import dagger.Provides
import javax.inject.Singleton

@Module
class AppModule(private val mApplication: MyApp) {

    @Provides
    @Singleton
    fun providesApp(): MyApp = mApplication

    @Provides
    @Singleton
    fun providesContext(): Context = mApplication

}
