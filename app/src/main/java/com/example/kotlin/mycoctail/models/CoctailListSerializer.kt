package com.example.kotlin.mycoctail.models

import com.google.gson.annotations.SerializedName
import java.util.ArrayList

class CoctailListSerializer {

    @SerializedName("drinks")
    lateinit  var drinks: ArrayList<CoctailSmallDetail>

    override fun toString(): String {
        return "Coctail{" +
                "drinks=" + drinks +
                '}'.toString()
    }
}
