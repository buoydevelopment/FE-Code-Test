package com.granitosdearena.matiaslev.cocktails.data.database.model

import androidx.room.TypeConverter
import com.google.gson.Gson
import com.google.gson.reflect.TypeToken


class StringListConverter {

    @TypeConverter
    fun fromStringList(stringList: List<String>): String = Gson().toJson(stringList)

    @TypeConverter
    fun toStringList(jsonString: String): List<String> = Gson().fromJson(jsonString, getStringListType())

    private fun getStringListType() = object: TypeToken<List<String>>() {}.type

}