package com.hattrick.fecodetest.model

import com.google.gson.annotations.SerializedName

class CocktailWrapper(
    @SerializedName("idDrink") var id: String,
    @SerializedName("strDrink") var name: String,
    @SerializedName("strDrinkThumb") var thumb: String)