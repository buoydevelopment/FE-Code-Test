package com.example.kotlin.mycoctail.models

class Coctail {

    lateinit  var smallInformation: CoctailSmallDetail
    lateinit  var completeInformation: CoctailInformation

    override fun toString(): String {
        return "Coctail{" +
                "smallInformation=" + smallInformation +
                ", completeInformation=" + completeInformation +
                '}'.toString()
    }
}
