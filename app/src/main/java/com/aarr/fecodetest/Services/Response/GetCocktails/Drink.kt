package com.aarr.fecodetest.Services.Response.GetCocktails

import com.google.gson.annotations.Expose
import com.google.gson.annotations.SerializedName
import java.io.Serializable

/**
 * Created by andresrodriguez on 5/10/18.
 */
data class Drink(
        @SerializedName("idDrink")
        @Expose
        var idDrink: Int=-1,
        @SerializedName("strDrink")
        @Expose
        var strDrink: String?=null,
        @SerializedName("strDrinkThumb")
        @Expose
        var strDrinkThumb: String?=null

):Serializable{
        constructor():this(
                -1,
                "",
                ""

        )
}