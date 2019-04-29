package com.granitosdearena.matiaslev.cocktails.data.database.model

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity
data class CocktailPreviewDatabase(
    @PrimaryKey var idDrink: Int,
    var drinkName: String,
    var drinkThumb: String
)