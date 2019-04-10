package com.granitosdearena.matiaslev.cocktails.data.mappers

import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailPreviewCloud
import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailPreviewCloudList
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailPreviewDatabase

class CocktailPreviewCloudToDatabaseMapper: BaseMapper<CocktailPreviewCloudList, List<CocktailPreviewDatabase>> {

    override fun transform(input: CocktailPreviewCloudList): List<CocktailPreviewDatabase> =
        input.drinks.map { CocktailPreviewDatabase(it.idDrink.toInt(), it.strDrink, it.strDrinkThumb) }

    override fun transformToData(input: List<CocktailPreviewDatabase>): CocktailPreviewCloudList =
        CocktailPreviewCloudList(
            input.map {
                CocktailPreviewCloud(
                    it.drinkName ?: "",
                    it.drinkThumb ?: "",
                    it.idDrink.toString()
                )
            }
        )

}
