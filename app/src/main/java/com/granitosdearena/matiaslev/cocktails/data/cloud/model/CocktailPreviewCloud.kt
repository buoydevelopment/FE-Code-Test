package com.granitosdearena.matiaslev.cocktails.data.cloud.model

data class CocktailPreviewCloudList(val drinks: List<CocktailPreviewCloud>)

data class CocktailPreviewCloud(
    var strDrink: String,
    var strDrinkThumb: String,
    var idDrink: String
)