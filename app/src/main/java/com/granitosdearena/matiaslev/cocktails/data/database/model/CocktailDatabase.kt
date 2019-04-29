package com.granitosdearena.matiaslev.cocktails.data.database.model

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class CocktailDatabase(
    @PrimaryKey var drinkId: Int,
    var drinkName: String,
    var drinkThumb: String,
    var drinkInstructions: String,
    var drinkIngredients: List<String>,
    var drinkMeasures: List<String>
)