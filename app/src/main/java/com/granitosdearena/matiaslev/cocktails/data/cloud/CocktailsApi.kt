package com.granitosdearena.matiaslev.cocktails.data.cloud

import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailCloudList
import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailPreviewCloudList
import io.reactivex.Single
import retrofit2.http.GET
import retrofit2.http.Query

interface CocktailsApi {

    @GET("filter.php?g=Cocktail_glass")
    fun getCockailsPreview(): Single<CocktailPreviewCloudList>

    @GET("lookup.php?")
    fun getCocktail(@Query("i") id: String): Single<CocktailCloudList>

}