package com.kimboo.androidjobsnewsletter.di.module

import com.kimboo.mvvmkotlin.db.CocktailDao
import com.kimboo.mvvmkotlin.retrofit.api.CocktailApi
import com.kimboo.mvvmkotlin.retrofit.repositories.CocktailRepository
import com.kimboo.mvvmkotlin.retrofit.repositories.CocktailRepositoryImp
import dagger.Module
import dagger.Provides

@Module
class RepositoryModule {

    @Provides
    fun provideRecipesRepository(cocktailApi: CocktailApi, cocktailDao: CocktailDao) : CocktailRepository {
        return CocktailRepositoryImp(cocktailApi, cocktailDao)
    }

}
