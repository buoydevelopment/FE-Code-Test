package com.kimboo.mvvmkotlin.db

import android.arch.persistence.room.*
import com.kimboo.mvvmkotlin.model.Cocktail
import io.reactivex.Flowable

/**
 * Created by Agustin Tomas Larghi on 28/5/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
@Dao
interface CocktailDao {
    @Query("SELECT * FROM cocktails where name like :q ")
    fun getAllCocktailsByQueryName(q: String = ""): Flowable<List<Cocktail>>

    @Query("SELECT * FROM cocktails where alcoholic = :alcoholic")
    fun getAllCocktailsByAlcohol(alcoholic: String): Flowable<List<Cocktail>>

    @Query("SELECT * FROM cocktails where glass like :glass")
    fun getAllCocktailsByGlass(glass: String): Flowable<List<Cocktail>>

    @Query("SELECT * FROM cocktails where category = :category")
    fun getAllCocktailsByCategory(category: String): Flowable<List<Cocktail>>

    @Query("SELECT * FROM cocktails where id = :id")
    fun getCocktailById(id: String): Flowable<Cocktail>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun storeCocktails(cocktails: List<Cocktail>)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun storeCocktail(cocktail: Cocktail)

    @Update()
    fun updateCocktail(cocktail: Cocktail)
}