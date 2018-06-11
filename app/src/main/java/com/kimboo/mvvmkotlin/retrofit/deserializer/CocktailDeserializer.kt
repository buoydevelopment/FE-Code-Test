package com.kimboo.mvvmkotlin.retrofit.deserializer

import com.google.gson.Gson
import com.google.gson.JsonDeserializationContext
import com.google.gson.JsonDeserializer
import com.google.gson.JsonElement
import com.kimboo.mvvmkotlin.retrofit.responses.ApiCocktailResponse
import java.lang.reflect.Type

class CocktailDeserializer: JsonDeserializer<ApiCocktailResponse> {

    override fun deserialize(json: JsonElement?, typeOfT: Type?, context: JsonDeserializationContext?): ApiCocktailResponse {
        val apiCocktailResponse = Gson().fromJson(json, ApiCocktailResponse::class.java)

        json?.let {

            apiCocktailResponse.drinks.forEachIndexed { index, apiCocktailDrinkResponse ->
                val jsonObject = it.asJsonObject.get("drinks").asJsonArray[index].asJsonObject

                val ingredientsEntrySet = jsonObject.entrySet().filter {
                    ingredientsEntry -> (ingredientsEntry.key.startsWith("strIngredient"))
                }

                apiCocktailDrinkResponse.strIngredients = ingredientsEntrySet.map { e ->
                    if (!e.value.isJsonNull) {
                        e.value.asString
                    } else {
                        ""
                    }
                }

                val measuresEntrySet = jsonObject.entrySet().filter {
                    measuresEntrySet -> (measuresEntrySet.key.startsWith("strMeasure"))
                }

                apiCocktailDrinkResponse.strMeasures = measuresEntrySet.map {  e ->
                    if (!e.value.isJsonNull) {
                        e.value.asString
                    } else {
                        ""
                    }
                }
            }
        }

        return apiCocktailResponse
    }
}
