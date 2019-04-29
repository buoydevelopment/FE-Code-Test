package com.granitosdearena.matiaslev.cocktails.data.mappers.cocktailPreview

import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailPreviewDatabase
import com.granitosdearena.matiaslev.cocktails.data.mappers.BaseMapper
import com.granitosdearena.matiaslev.cocktails.domain.CocktailPreview

class ToCocktailPreviewFromDatabaseMapper:
    BaseMapper<CocktailPreviewDatabase, CocktailPreview> {

    override fun transform(input: CocktailPreviewDatabase): CocktailPreview =
        CocktailPreview(input.drinkName, input.drinkThumb, input.idDrink.toString())

}