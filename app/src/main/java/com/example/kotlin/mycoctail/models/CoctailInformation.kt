package com.example.kotlin.mycoctail.models

import com.google.gson.annotations.SerializedName

class CoctailInformation {

    //    @SerializedName("strDrinkZH-HANS") protected String strDrinkZH-HANS;
    //    @SerializedName("strDrinkZH-HANT") protected String strDrinkZH-HANT;
    //    @SerializedName("strInstructionsZH-HANS") protected String strInstructionsZH-HANS;
    //    @SerializedName("strInstructionsZH-HANT") protected String strInstructionsZH-HANT;


    @SerializedName("idDrink")
    var idDrink: Int = 0
    @SerializedName("strDrink")
    var strDrink: String = ""
    @SerializedName("strDrinkES")
    var strDrinkES: String = ""
    @SerializedName("strDrinkDE")
    var strDrinkDE: String = ""
    @SerializedName("strDrinkFR")
    var strDrinkFR: String = ""
    @SerializedName("strVideo")
    var strVideo: String = ""
    @SerializedName("strCategory")
    var strCategory: String = ""
    @SerializedName("strIBA")
    var strIBA: String = ""
    @SerializedName("strAlcoholic")
    var strAlcoholic: String = ""
    @SerializedName("strGlass")
    var strGlass: String = ""
    @SerializedName("strInstructions")
    var strInstructions: String = ""
    @SerializedName("strInstructionsES")
    var strInstructionsES: String = ""
    @SerializedName("strInstructionsDE")
    var strInstructionsDE: String = ""
    @SerializedName("strInstructionsFR")
    var strInstructionsFR: String = ""
    @SerializedName("strDrinkThumb")
    var strDrinkThumb: String = ""
    @SerializedName("strIngredient1")
    var strIngredient1: String = ""
    @SerializedName("strIngredient2")
    var strIngredient2: String = ""
    @SerializedName("strIngredient3")
    var strIngredient3: String = ""
    @SerializedName("strIngredient4")
    var strIngredient4: String = ""
    @SerializedName("strIngredient5")
    var strIngredient5: String = ""
    @SerializedName("strIngredient6")
    var strIngredient6: String = ""
    @SerializedName("strIngredient7")
    var strIngredient7: String = ""
    @SerializedName("strIngredient8")
    var strIngredient8: String = ""
    @SerializedName("strIngredient9")
    var strIngredient9: String = ""
    @SerializedName("strIngredient10")
    var strIngredient10: String = ""
    @SerializedName("strIngredient11")
    var strIngredient11: String = ""
    @SerializedName("strIngredient12")
    var strIngredient12: String = ""
    @SerializedName("strIngredient13")
    var strIngredient13: String = ""
    @SerializedName("strIngredient14")
    var strIngredient14: String = ""
    @SerializedName("strIngredient15")
    var strIngredient15: String = ""
    @SerializedName("strMeasure1")
    var strMeasure1: String = ""
    @SerializedName("strMeasure2")
    var strMeasure2: String = ""
    @SerializedName("strMeasure3")
    var strMeasure3: String = ""
    @SerializedName("strMeasure4")
    var strMeasure4: String = ""
    @SerializedName("strMeasure5")
    var strMeasure5: String = ""
    @SerializedName("strMeasure6")
    var strMeasure6: String = ""
    @SerializedName("strMeasure7")
    var strMeasure7: String = ""
    @SerializedName("strMeasure8")
    var strMeasure8: String = ""
    @SerializedName("strMeasure9")
    var strMeasure9: String = ""
    @SerializedName("strMeasure10")
    var strMeasure10: String = ""
    @SerializedName("strMeasure11")
    var strMeasure11: String = ""
    @SerializedName("strMeasure12")
    var strMeasure12: String = ""
    @SerializedName("strMeasure13")
    var strMeasure13: String = ""
    @SerializedName("strMeasure14")
    var strMeasure14: String = ""
    @SerializedName("strMeasure15")
    var strMeasure15: String = ""
    @SerializedName("dateModified")
    var dateModifieds: String = ""


    override fun toString(): String {
        return "CoctailInformation{" +
                "idDrink=" + idDrink +
                ", strDrink='" + strDrink + '\''.toString() +
                ", strDrinkES='" + strDrinkES + '\''.toString() +
                ", strDrinkDE='" + strDrinkDE + '\''.toString() +
                ", strDrinkFR='" + strDrinkFR + '\''.toString() +
                ", strVideo='" + strVideo + '\''.toString() +
                ", strCategory='" + strCategory + '\''.toString() +
                ", strIBA='" + strIBA + '\''.toString() +
                ", strAlcoholic='" + strAlcoholic + '\''.toString() +
                ", strGlass='" + strGlass + '\''.toString() +
                ", strInstructions='" + strInstructions + '\''.toString() +
                ", strInstructionsES='" + strInstructionsES + '\''.toString() +
                ", strInstructionsDE='" + strInstructionsDE + '\''.toString() +
                ", strInstructionsFR='" + strInstructionsFR + '\''.toString() +
                ", strDrinkThumb='" + strDrinkThumb + '\''.toString() +
                ", strIngredient1='" + strIngredient1 + '\''.toString() +
                ", strIngredient2='" + strIngredient2 + '\''.toString() +
                ", strIngredient3='" + strIngredient3 + '\''.toString() +
                ", strIngredient4='" + strIngredient4 + '\''.toString() +
                ", strIngredient5='" + strIngredient5 + '\''.toString() +
                ", strIngredient6='" + strIngredient6 + '\''.toString() +
                ", strIngredient7='" + strIngredient7 + '\''.toString() +
                ", strIngredient8='" + strIngredient8 + '\''.toString() +
                ", strIngredient9='" + strIngredient9 + '\''.toString() +
                ", strIngredient10='" + strIngredient10 + '\''.toString() +
                ", strIngredient11='" + strIngredient11 + '\''.toString() +
                ", strIngredient12='" + strIngredient12 + '\''.toString() +
                ", strIngredient13='" + strIngredient13 + '\''.toString() +
                ", strIngredient14='" + strIngredient14 + '\''.toString() +
                ", strIngredient15='" + strIngredient15 + '\''.toString() +
                ", strMeasure1='" + strMeasure1 + '\''.toString() +
                ", strMeasure2='" + strMeasure2 + '\''.toString() +
                ", strMeasure3='" + strMeasure3 + '\''.toString() +
                ", strMeasure4='" + strMeasure4 + '\''.toString() +
                ", strMeasure5='" + strMeasure5 + '\''.toString() +
                ", strMeasure6='" + strMeasure6 + '\''.toString() +
                ", strMeasure7='" + strMeasure7 + '\''.toString() +
                ", strMeasure8='" + strMeasure8 + '\''.toString() +
                ", strMeasure9='" + strMeasure9 + '\''.toString() +
                ", strMeasure10='" + strMeasure10 + '\''.toString() +
                ", strMeasure11='" + strMeasure11 + '\''.toString() +
                ", strMeasure12='" + strMeasure12 + '\''.toString() +
                ", strMeasure13='" + strMeasure13 + '\''.toString() +
                ", strMeasure14='" + strMeasure14 + '\''.toString() +
                ", strMeasure15='" + strMeasure15 + '\''.toString() +
                ", dateModifieds='" + dateModifieds + '\''.toString() +
                '}'.toString()
    }


    fun getIngredient(number: Int?): String {

        when (number) {
            1 -> return this.strIngredient1
            2 -> return this.strIngredient2
            3 -> return this.strIngredient3
            4 -> return this.strIngredient4
            5 -> return this.strIngredient5
            6 -> return this.strIngredient6
            7 -> return this.strIngredient7
            8 -> return this.strIngredient8
            9 -> return this.strIngredient9
            10 -> return this.strIngredient10
            11 -> return this.strIngredient11
            12 -> return this.strIngredient12
            13 -> return this.strIngredient13
            14 -> return this.strIngredient14
            15 -> return this.strIngredient15
            else -> {
            }
        }
        return ""
    }


    fun getMeasure(number: Int?): String {

        when (number) {
            1 -> return this.strMeasure1
            2 -> return this.strMeasure2
            3 -> return this.strMeasure3
            4 -> return this.strMeasure4
            5 -> return this.strMeasure5
            6 -> return this.strMeasure6
            7 -> return this.strMeasure7
            8 -> return this.strMeasure8
            9 -> return this.strMeasure9
            10 -> return this.strMeasure10
            11 -> return this.strMeasure11
            12 -> return this.strMeasure12
            13 -> return this.strMeasure13
            14 -> return this.strMeasure14
            15 -> return this.strMeasure15
            else -> {
            }
        }
        return ""
    }

}//class
