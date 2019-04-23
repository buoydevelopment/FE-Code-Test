package com.buoy.codetest.model.repository

import com.buoy.codetest.model.api.CocktailApi
import com.buoy.codetest.model.domain.Drink
import io.reactivex.Single

class CocktailRepositoryImpl(val cocktailApi: CocktailApi): CocktailRepository {

    override fun getCocktailDetail(id: String): Single<Drink> {
        return cocktailApi.getCocktailDetail(id).map { drinkList ->
            var drink: Drink? = null
            drinkList.drinks?.let { drinks ->
                if (drinks.isNotEmpty()) {
                    drink = drinks[0]
                }
            }
            drink
        }

    }

    override fun getAllCocktails(): Single<List<Drink>> {
        return cocktailApi.getAllCocktails().map { drinksList ->
            drinksList.drinks
        }
    }

}