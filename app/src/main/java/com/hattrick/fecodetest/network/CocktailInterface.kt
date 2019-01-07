package com.hattrick.fecodetest.network

import com.hattrick.fecodetest.model.APIData
import com.hattrick.fecodetest.model.Cocktail
import com.hattrick.fecodetest.model.CocktailWrapper
import io.reactivex.Observable
import retrofit2.http.GET
import retrofit2.http.Query

interface CocktailInterface {

    @GET("filter.php?g=Cocktail_glass")
    fun getCocktails(): Observable<APIData<List<CocktailWrapper>>>

    @GET("lookup.php?")
    fun getCocktailDetails(@Query("i") cocktailId: String): Observable<APIData<List<Cocktail>>>

}