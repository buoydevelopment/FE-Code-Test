package com.kimboo.mvvmkotlin.di.modules

import android.arch.lifecycle.ViewModel
import android.arch.lifecycle.ViewModelProvider
import com.kimboo.mvvmkotlin.di.ViewModelKey
import com.kimboo.mvvmkotlin.ui.cocktaildetail.CocktailDetailViewModel
import com.kimboo.mvvmkotlin.ui.cocktaillist.CocktailListViewModel
import dagger.Binds
import dagger.Module
import dagger.multibindings.IntoMap


@Module
abstract class ViewModelModule {

    @Binds
    @IntoMap
    @ViewModelKey(CocktailListViewModel::class)
    abstract fun bindMainViewModel(cocktailListViewModel: CocktailListViewModel): ViewModel

    @Binds
    @IntoMap
    @ViewModelKey(CocktailDetailViewModel::class)
    abstract fun bindUserDetailViewModel(cocktailDetailViewModel: CocktailDetailViewModel): ViewModel

    @Binds
    abstract fun bindViewModelFactory(factory: MyViewModelFactory): ViewModelProvider.Factory

}