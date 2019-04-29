package com.granitosdearena.matiaslev.cocktails.data.database

import androidx.room.Database
import androidx.room.RoomDatabase
import androidx.room.TypeConverters
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailDatabase
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailPreviewDatabase
import com.granitosdearena.matiaslev.cocktails.data.database.model.StringListConverter

@Database(
    entities = arrayOf(
        CocktailPreviewDatabase::class,
        CocktailDatabase::class
    ),
    version = 1
)
@TypeConverters(StringListConverter::class)
abstract class AppDatabase : RoomDatabase() {
    abstract fun cocktailPreviewDao(): CocktailPreviewDao
    abstract fun cocktailDao(): CocktailDao
}