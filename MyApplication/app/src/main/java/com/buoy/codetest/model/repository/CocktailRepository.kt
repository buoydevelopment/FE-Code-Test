package com.buoy.codetest.model.repository

import com.buoy.codetest.model.domain.Drink
import io.reactivex.Single


interface CocktailRepository {

    fun getAllCocktails(): Single<List<Drink>>

    fun getCocktailDetail(id: String): Single<Drink>

}