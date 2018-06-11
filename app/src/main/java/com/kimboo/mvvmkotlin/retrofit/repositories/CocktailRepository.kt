package com.kimboo.mvvmkotlin.retrofit.repositories

import android.arch.lifecycle.LiveData
import com.kimboo.mvvmkotlin.extensions.DataSource
import com.kimboo.mvvmkotlin.model.Cocktail
import io.reactivex.Observable

/**
 * Created by Agustin Tomas Larghi on 27/2/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
interface CocktailRepository {

    fun getCocktail(id: String): Observable<Cocktail>?

    fun fetchCocktails(): Observable<DataSource<List<Cocktail>>>

    fun fetchCocktail(id: String): Observable<DataSource<Cocktail>>

    fun updateCocktail(cocktail: Cocktail)

    fun getCocktailBySearchQuery(query: String): LiveData<List<Cocktail>>

    fun getCocktailByFilters(filterType: String): LiveData<List<Cocktail>>
}