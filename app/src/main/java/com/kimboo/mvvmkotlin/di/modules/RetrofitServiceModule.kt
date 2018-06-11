package com.kimboo.androidjobsnewsletter.di.module

import com.kimboo.mvvmkotlin.retrofit.api.CocktailApi
import dagger.Module
import dagger.Provides
import retrofit2.Retrofit
/**
 * Created by Agustin Tomas Larghi on 9/12/2017.
 * Email: agustin.tomas.larghi@gmail.com
 */
@Module
class RetrofitServiceModule {

    @Provides
    fun providesRandomUserApi(retrofit: Retrofit): CocktailApi {
        return retrofit.create(CocktailApi::class.java)
    }

}

