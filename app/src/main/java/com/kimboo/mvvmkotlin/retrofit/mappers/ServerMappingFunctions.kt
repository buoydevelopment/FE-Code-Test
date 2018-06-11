package com.kimboo.mvvmkotlin.retrofit.mappers

import com.kimboo.mvvmkotlin.model.Cocktail
import com.kimboo.mvvmkotlin.retrofit.responses.ApiCocktailResponse

/**
 * Created by Agustin Tomas Larghi on 6/3/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */

fun serverUserProfileCollectionToModel(serverResponses: ApiCocktailResponse): List<Cocktail> {
    var result = ArrayList<Cocktail>()

    for (response in serverResponses.drinks) {
        val cocktail = Cocktail(response.idDrink, response.strDrink, response.strDrinkThumb, response.strVideo,
                response.strCategory, response.strIBA, response.strAlcoholic, response.strGlass, response.strInstructions,
                response.strIngredients, response.strMeasures, response.dateModified)
        result.add(cocktail)
    }

    return result
}

fun serverUserProfileToModel(serverResponses: ApiCocktailResponse): Cocktail {
    serverResponses.drinks.first().let {
        return Cocktail(it.idDrink, it.strDrink, it.strDrinkThumb, it.strVideo,
                it.strCategory, it.strIBA, it.strAlcoholic, it.strGlass, it.strInstructions,
                it.strIngredients, it.strMeasures, it.dateModified)
    }
}
