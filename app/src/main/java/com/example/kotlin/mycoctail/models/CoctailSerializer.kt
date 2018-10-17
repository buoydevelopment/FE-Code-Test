package com.example.kotlin.mycoctail.models

import com.google.gson.annotations.SerializedName

import java.util.ArrayList

class CoctailSerializer {

    @SerializedName("drinks")
    lateinit var drinks: ArrayList<CoctailInformation>

    override fun toString(): String {
        return "CoctailSerializer{" +
                "drinks=" + drinks +
                '}'.toString()
    }
}
