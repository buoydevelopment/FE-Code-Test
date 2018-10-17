package com.example.kotlin.mycoctail.models

import com.google.gson.annotations.SerializedName

class CoctailSmallDetail {

    @SerializedName("strDrink")
    var strDrink: String =""
    @SerializedName("idDrink")
    var idDrink: Int = 0
    @SerializedName("strDrinkThumb")
    var strDrinkThumb: String =""


    override fun toString(): String {
        return "CoctailSmallDetail{" +
                "strDrink='" + strDrink + '\''.toString() +
                ", idDrink=" + idDrink +
                ", strDrinkThumb='" + strDrinkThumb + '\''.toString() +
                '}'.toString()
    }
}
