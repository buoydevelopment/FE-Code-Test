package com.granitosdearena.matiaslev.cocktails.data.mappers.cocktail

import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailDatabase
import com.granitosdearena.matiaslev.cocktails.data.mappers.BaseMapper
import com.granitosdearena.matiaslev.cocktails.domain.Cocktail

class ToCocktailFromDatabaseMapper: BaseMapper<CocktailDatabase, Cocktail> {

    override fun transform(input: CocktailDatabase): Cocktail = Cocktail(
        input.drinkId.toString(),
        input.drinkName,
        input.drinkThumb,
        input.drinkInstructions,
        input.drinkIngredients.filter { it.isNotBlank() },
        input.drinkMeasures.filter { it.isNotBlank() }
    )

}