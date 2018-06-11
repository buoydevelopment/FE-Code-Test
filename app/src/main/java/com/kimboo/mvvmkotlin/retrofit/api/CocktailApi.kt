package com.kimboo.mvvmkotlin.retrofit.api

import com.kimboo.mvvmkotlin.retrofit.responses.ApiCocktailResponse
import io.reactivex.Observable
import retrofit2.Response
import retrofit2.http.GET
import retrofit2.http.Query

/**
 * Created by Agustin Tomas Larghi on 27/2/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
interface CocktailApi {

    @GET("/api/json/v1/1/search.php")
    fun getCocktailBySearchQuery(@Query("s") query: String = ""): Observable<Response<ApiCocktailResponse>>

    @GET("/api/json/v1/1/filter.php")
    fun getCocktailByFilters(@Query("g") glass: String = "Cocktail_glass",
                             @Query("i") ingredients: String = "",
                             @Query("a") alcoholic: String = "",
                             @Query("c") category: String = ""): Observable<Response<ApiCocktailResponse>>

    @GET("/api/json/v1/1/filter.php")
    fun getCocktailByGlass(@Query("g") glass: String = "Cocktail_glass"): Observable<Response<ApiCocktailResponse>>

    @GET("/api/json/v1/1/filter.php")
    fun getCocktailByCategory(@Query("c") category: String = ""): Observable<Response<ApiCocktailResponse>>

    @GET("/api/json/v1/1/filter.php")
    fun getCocktailsByAlcoholic(@Query("a") alcoholic: String = ""): Observable<Response<ApiCocktailResponse>>


    @GET("/api/json/v1/1/lookup.php")
    fun getCocktailById(@Query("i") id: String): Observable<Response<ApiCocktailResponse>>

}