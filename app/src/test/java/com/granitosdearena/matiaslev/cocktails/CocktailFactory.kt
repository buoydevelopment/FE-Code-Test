package com.granitosdearena.matiaslev.cocktails

import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailCloud
import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailCloudList
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailPreviewDatabase
import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailPreviewCloud
import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailPreviewCloudList
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailDatabase
import com.granitosdearena.matiaslev.cocktails.domain.Cocktail
import com.granitosdearena.matiaslev.cocktails.domain.CocktailPreview

object CocktailFactory {

    val id = "1"
    val name = "Crazy Cocktail"
    val thumb = "Crazy_Cocktail.jpg"
    val instruction = "instruction"
    val ingredient = "ingredient"
    val ingredientBlank = " "
    val measure = "measure"
    val measureBlank = " "

    fun newCocktail() = Cocktail(id, name, thumb,
        instruction, listOf(ingredient, ingredient), listOf(measure, measure))

    fun newCocktailCloudClass() = CocktailCloudList(newCocktailCloudList())

    fun newCocktailCloudList() = listOf(newCocktailCloud())

    fun newCocktailCloud() = CocktailCloud(id, name, thumb,
        instruction, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient,
        ingredient, ingredient, ingredient, ingredient, ingredient, ingredient, ingredient,
        measure, measure, measure, measure, measure, measure, measure, measure, measure, measure, measure, measure,
        measure, measure, measure
        )

    fun newCocktailDatabase() = CocktailDatabase(id.toInt(), name, thumb,
        instruction, listOf(ingredient, ingredientBlank, ingredient), listOf(measure, measureBlank ,measure)
    )

    fun newCocktailPreview() = CocktailPreview(name, thumb, id)

    fun newCocktailPreviewCloudClass() = CocktailPreviewCloudList(newCocktailPreviewCloudList())

    fun newCocktailPreviewCloudList() = listOf(
        newCocktailPreviewCloud(),
        newCocktailPreviewCloud(),
        newCocktailPreviewCloud(),
        newCocktailPreviewCloud()
    )

    fun newCocktailPreviewCloud() = CocktailPreviewCloud(name, thumb, id)

    fun newCocktailPreviewDatabaseList() = listOf(newCocktailPreviewDatabase())

    fun newCocktailPreviewDatabase() =
        CocktailPreviewDatabase(id.toInt(), name, thumb)

}