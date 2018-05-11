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
@DatabaseTable(tableName = "drinks")
data class DrinksModel(
        @DatabaseField(generatedId = true, columnName = "id_mobile_drink")
        var idMobileDrink: Int=-1,
        @DatabaseField(columnName = "id_server_drink")
        var idServerDrink: Int=-1,
        @DatabaseField(columnName = "drink_name")
        var strDrink: String?=null,
        @DatabaseField(columnName = "drink_image")
        var strDrinkThumb: String?=null
): Serializable {
    constructor():this(
            -1,
            -1,
            "",
            ""
    )

    fun getRepository(): RuntimeExceptionDao<DrinksModel, Int> {
        return DatabaseHelper.DaoGet.get(DrinksModel::class.java)
    }
}