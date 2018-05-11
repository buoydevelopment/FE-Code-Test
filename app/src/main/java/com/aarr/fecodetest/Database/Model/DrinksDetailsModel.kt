package com.aarr.fecodetest.Database.Model

import com.aarr.fecodetest.Database.Helper.DatabaseHelper
import com.google.gson.annotations.Expose
import com.google.gson.annotations.SerializedName
import com.j256.ormlite.dao.RuntimeExceptionDao
import com.j256.ormlite.field.DatabaseField
import com.j256.ormlite.table.DatabaseTable
import java.io.Serializable

/**
 * Created by andresrodriguez on 5/10/18.
 */
@DatabaseTable(tableName = "drinks_details")
data class DrinksDetailsModel(
        @DatabaseField(generatedId = true, columnName = "id_mobile_drink_detail")
        var idMobileDrink:Int=-1,
        @DatabaseField(columnName = "id_server_drink_detail")
        var idServerDrink:Int=-1,
        @DatabaseField(columnName = "name")
        var strDrink:String?=null,
        @DatabaseField(columnName = "video")
        var strVideo:String?=null,
        @DatabaseField(columnName = "category")
        var strCategory:String?=null,
        @DatabaseField(columnName = "iba")
        var strIBA:String?=null,
        @DatabaseField(columnName = "alcoholic")
        var strAlcoholic:String?=null,
        @DatabaseField(columnName = "glass")
        var strGlass:String?=null,
        @DatabaseField(columnName = "instruction")
        var strInstructions:String?=null,
        @DatabaseField(columnName = "image")
        var strDrinkThumb:String?=null,
        @DatabaseField(columnName = "ingredient1")
        var strIngredient1:String?=null,
        @DatabaseField(columnName = "ingredient2")
        var strIngredient2:String?=null,
        @DatabaseField(columnName = "ingredient3")
        var strIngredient3:String?=null,
        @DatabaseField(columnName = "ingredient4")
        var strIngredient4:String?=null,
        @DatabaseField(columnName = "ingredient5")
        var strIngredient5:String?=null,
        @DatabaseField(columnName = "ingredient6")
        var strIngredient6:String?=null,
        @DatabaseField(columnName = "ingredient7")
        var strIngredient7:String?=null,
        @DatabaseField(columnName = "ingredient8")
        var strIngredient8:String?=null,
        @DatabaseField(columnName = "ingredient9")
        var strIngredient9:String?=null,
        @DatabaseField(columnName = "ingredient10")
        var strIngredient10:String?=null,
        @DatabaseField(columnName = "ingredient11")
        var strIngredient11:String?=null,
        @DatabaseField(columnName = "ingredient12")
        var strIngredient12:String?=null,
        @DatabaseField(columnName = "ingredient13")
        var strIngredient13:String?=null,
        @DatabaseField(columnName = "ingredient14")
        var strIngredient14:String?=null,
        @DatabaseField(columnName = "ingredient15")
        var strIngredient15:String?=null,
        @DatabaseField(columnName = "measure1")
        var strMeasure1:String?=null,
        @DatabaseField(columnName = "measure2")
        var strMeasure2:String?=null,
        @DatabaseField(columnName = "measure3")
        var strMeasure3:String?=null,
        @DatabaseField(columnName = "measure4")
        var strMeasure4:String?=null,
        @DatabaseField(columnName = "measure5")
        var strMeasure5:String?=null,
        @DatabaseField(columnName = "measure6")
        var strMeasure6:String?=null,
        @DatabaseField(columnName = "measure7")
        var strMeasure7:String?=null,
        @DatabaseField(columnName = "measure8")
        var strMeasure8:String?=null,
        @DatabaseField(columnName = "measure9")
        var strMeasure9:String?=null,
        @DatabaseField(columnName = "measure10")
        var strMeasure10:String?=null,
        @DatabaseField(columnName = "measure11")
        var strMeasure11:String?=null,
        @DatabaseField(columnName = "measure12")
        var strMeasure12:String?=null,
        @DatabaseField(columnName = "measure13")
        var strMeasure13:String?=null,
        @DatabaseField(columnName = "measure14")
        var strMeasure14:String?=null,
        @DatabaseField(columnName = "measure15")
        var strMeasure15:String?=null,
        @DatabaseField(columnName = "date_modified")
        var dateModified:String?=null

): Serializable {
    constructor():this(
            -1,
            -1,
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            "",
            ""
    )

    fun getRepository(): RuntimeExceptionDao<DrinksDetailsModel, Int> {
        return DatabaseHelper.DaoGet.get(DrinksDetailsModel::class.java)
    }
}