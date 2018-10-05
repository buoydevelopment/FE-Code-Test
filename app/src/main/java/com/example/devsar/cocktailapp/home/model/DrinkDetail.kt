package com.example.devsar.cocktailapp.home.model

data class DrinkDetailJson(
        val idDrink: String?,
        val strDrink: String?,
        val strInstructions: String?,
        val strDrinkThumb: String?,
        val strIngredient1: String?,
        val strIngredient2: String?,
        val strIngredient3: String?,
        val strIngredient4: String?,
        val strIngredient5: String?,
        val strIngredient6: String?,
        val strIngredient7: String?,
        val strIngredient8: String?,
        val strIngredient9: String?,
        val strIngredient10: String?,
        val strIngredient11: String?,
        val strIngredient12: String?,
        val strIngredient13: String?,
        val strIngredient14: String?,
        val strIngredient15: String?)

class DrinkDetail(val idDrink: String?,
                  val strDrink: String?,
                  val strInstructions: String?,
                  val strDrinkThumb: String?,
                  val ingredients: List<String?>?)