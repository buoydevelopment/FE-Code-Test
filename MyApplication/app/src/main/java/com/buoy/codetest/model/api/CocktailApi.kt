package com.buoy.codetest.model.api

import com.buoy.codetest.model.domain.DrinksList
import io.reactivex.Single

import retrofit2.http.GET
import retrofit2.http.Path
import retrofit2.http.Query

interface CocktailApi {

    @GET("api/json/v1/1/filter.php?g=Cocktail_glass")
    fun getAllCocktails(): Single<DrinksList>

    @GET("api/json/v1/1/lookup.php")
    fun getCocktailDetail(@Query("i") id: String): Single<DrinksList>

    companion object {
        const val URL = "http://www.thecocktaildb.com"
    }
}