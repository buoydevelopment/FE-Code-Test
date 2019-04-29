package com.granitosdearena.matiaslev.cocktails.data.mappers.cocktail

import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailCloud
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailDatabase
import com.granitosdearena.matiaslev.cocktails.data.mappers.BaseMapper

class CocktailCloudToDatabaseMapper: BaseMapper<CocktailCloud, CocktailDatabase> {

    override fun transform(input: CocktailCloud): CocktailDatabase =
        CocktailDatabase(
            input.idDrink.toInt(),
            input.strDrink,
            input.strDrinkThumb,
            input.strInstructions,
            getIngredients(input),
            getMeasures(input))

    private fun getIngredients(input: CocktailCloud): List<String> {
        val mutableListOfIngredients = mutableListOf<String>()
        if(!input.strIngredient1.isNullOrEmpty()) input.strIngredient1?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient2.isNullOrEmpty()) input.strIngredient2?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient3.isNullOrEmpty()) input.strIngredient3?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient4.isNullOrEmpty()) input.strIngredient4?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient5.isNullOrEmpty()) input.strIngredient5?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient6.isNullOrEmpty()) input.strIngredient6?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient7.isNullOrEmpty()) input.strIngredient7?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient8.isNullOrEmpty()) input.strIngredient8?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient9.isNullOrEmpty()) input.strIngredient9?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient10.isNullOrEmpty()) input.strIngredient1?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient11.isNullOrEmpty()) input.strIngredient1?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient12.isNullOrEmpty()) input.strIngredient1?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient13.isNullOrEmpty()) input.strIngredient1?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient14.isNullOrEmpty()) input.strIngredient1?.let { mutableListOfIngredients.add(it) }
        if(!input.strIngredient15.isNullOrEmpty()) input.strIngredient1?.let { mutableListOfIngredients.add(it) }
        return mutableListOfIngredients
    }

    private fun getMeasures(input: CocktailCloud): List<String> {
        val mutableListOfMeasures = mutableListOf<String>()
        if(!input.strMeasure1.isNullOrEmpty()) input.strMeasure1?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure2.isNullOrEmpty()) input.strMeasure2?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure3.isNullOrEmpty()) input.strMeasure3?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure4.isNullOrEmpty()) input.strMeasure4?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure5.isNullOrEmpty()) input.strMeasure5?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure6.isNullOrEmpty()) input.strMeasure6?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure7.isNullOrEmpty()) input.strMeasure7?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure8.isNullOrEmpty()) input.strMeasure8?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure9.isNullOrEmpty()) input.strMeasure9?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure10.isNullOrEmpty()) input.strMeasure10?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure11.isNullOrEmpty()) input.strMeasure11?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure12.isNullOrEmpty()) input.strMeasure12?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure13.isNullOrEmpty()) input.strMeasure13?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure14.isNullOrEmpty()) input.strMeasure14?.let { mutableListOfMeasures.add(it) }
        if(!input.strMeasure15.isNullOrEmpty()) input.strMeasure15?.let { mutableListOfMeasures.add(it) }
        return mutableListOfMeasures
    }
}