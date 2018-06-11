package com.kimboo.mvvmkotlin.di.components

import com.kimboo.androidjobsnewsletter.di.module.*
import com.kimboo.mvvmkotlin.di.modules.ViewModelModule
import com.kimboo.mvvmkotlin.ui.cocktaildetail.CocktailDetailFragment
import com.kimboo.mvvmkotlin.ui.cocktaillist.CocktailListFragment
import dagger.Component
import javax.inject.Singleton

@Singleton
@Component(modules = [(AppModule::class), (RoomModule::class), (NetworkModule::class),
    (RetrofitServiceModule::class), (RepositoryModule::class), (ViewModelModule::class)])
interface Injector {

    fun inject(cocktailListFragment: CocktailListFragment)

    fun inject(cocktailDetailFragment: CocktailDetailFragment)

}