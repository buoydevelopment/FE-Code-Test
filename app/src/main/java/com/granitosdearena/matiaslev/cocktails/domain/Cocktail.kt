package com.granitosdearena.matiaslev.cocktails.domain

data class Cocktail(
    override var drinkId: String = EMPTY_STRING,
    override var drinkName: String = EMPTY_STRING,
    override var drinkThumb: String = EMPTY_STRING,
    var drinkInstructions: String,
    var drinkIngredients: List<String>,
    var drinkMeasures: List<String>
): CocktailPreview(drinkName, drinkThumb, drinkId) {

    companion object {
        // could be an global object Util, but for now is used just here.
        val EMPTY_STRING = ""
    }

    fun getIngredientsWithMeasures(): String {
        var ingredientsWithMeasuresText = EMPTY_STRING
        drinkMeasures.forEachIndexed { index, measure ->
            ingredientsWithMeasuresText += "$measure - ${drinkIngredients[index]} \n"
        }
        return ingredientsWithMeasuresText
    }

}