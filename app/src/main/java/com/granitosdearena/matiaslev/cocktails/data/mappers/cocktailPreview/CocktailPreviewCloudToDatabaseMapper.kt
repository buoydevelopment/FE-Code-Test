package com.granitosdearena.matiaslev.cocktails.data.mappers.cocktailPreview

import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailPreviewCloud
import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailPreviewCloudList
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailPreviewDatabase
import com.granitosdearena.matiaslev.cocktails.data.mappers.BaseMapper

class CocktailPreviewCloudToDatabaseMapper:
    BaseMapper<CocktailPreviewCloudList, List<CocktailPreviewDatabase>> {

    override fun transform(input: CocktailPreviewCloudList): List<CocktailPreviewDatabase> =
        input.drinks.map { CocktailPreviewDatabase(it.idDrink.toInt(), it.strDrink, it.strDrinkThumb) }

}
