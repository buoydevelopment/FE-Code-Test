package com.hattrick.fecodetest.repositories

import com.hattrick.fecodetest.model.CocktailWrapper
import com.hattrick.fecodetest.network.NetworkManager
import io.reactivex.Observable
import com.hattrick.fecodetest.common.model.Result
import com.hattrick.fecodetest.model.Cocktail

class CocktailsRepository {

    companion object {

        fun fetchCocktails(): Observable<Result<List<CocktailWrapper>>> {
            return NetworkManager.fetchCocktails()
        }

        fun fetchCocktailDetails(cocktailId: String): Observable<Result<Cocktail>> {
            return NetworkManager.fetchCocktailDetails(cocktailId)
        }

    }

}