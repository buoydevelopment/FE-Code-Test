package com.kimboo.mvvmkotlin.retrofit.responses

import com.google.gson.annotations.SerializedName

/**
 * Created by Agustin Tomas Larghi on 27/2/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
data class ApiCocktailDrinkResponse(
        @SerializedName("idDrink")
        val idDrink: String,

        @SerializedName("strDrink")
        val strDrink: String,

        @SerializedName("strDrinkThumb")
        val strDrinkThumb: String,

        @SerializedName("strVideo")
        val strVideo: String,

        @SerializedName("strCategory")
        val strCategory: String,

        @SerializedName("strIBA")
        val strIBA: String,

        @SerializedName("strAlcoholic")
        val strAlcoholic: String,

        @SerializedName("strGlass")
        val strGlass: String,

        @SerializedName("strInstructions")
        val strInstructions: String,

        var strIngredients: List<String>,

        var strMeasures: List<String>,

        @SerializedName("dateModified")
        val dateModified: String

)

data class ApiCocktailResponse(
        @SerializedName("drinks")
        val drinks: List<ApiCocktailDrinkResponse>
)