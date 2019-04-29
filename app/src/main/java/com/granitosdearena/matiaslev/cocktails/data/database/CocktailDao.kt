package com.granitosdearena.matiaslev.cocktails.data.database

import androidx.room.Dao
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.Query
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailDatabase
import io.reactivex.Observable

@Dao
interface CocktailDao {

    @Query("SELECT * FROM CocktailDatabase WHERE drinkId = :drinkId")
    fun searchCocktailById(drinkId: Int): Observable<CocktailDatabase>

    @Insert(onConflict = OnConflictStrategy.ABORT)
    fun insert(cocktailPreviewDatabaseList: CocktailDatabase)

}