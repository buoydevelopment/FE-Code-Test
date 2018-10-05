package network.api

import io.reactivex.Single
import retrofit2.http.GET

interface CocktailInterfaceApi {

    @GET("/api/json/v1/1/filter.php?g=Cocktail_glass")
    fun getDrinks(): Single<DrinksResult>

}