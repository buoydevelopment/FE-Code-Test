package com.aarr.fecodetest.Services

import com.aarr.fecodetest.Services.Response.GetCocktailDetails.GetCocktailDetails
import com.aarr.fecodetest.Services.Response.GetCocktails.GetCocktails
import retrofit2.Call
import retrofit2.http.*

/**
 * Created by andresrodriguez on 5/10/18.
 */
interface ApiServices {

    @POST("filter.php?g=Cocktail_glass")
    fun GetDrinks(): Call<GetCocktails>

    @GET
    fun GetDrinksDetails(@Url url: String): Call<GetCocktailDetails>
}