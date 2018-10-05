package network.api

import com.example.devsar.cocktailapp.home.model.DrinkDetail
import io.reactivex.Single
import retrofit2.http.GET
import retrofit2.http.Path
import retrofit2.http.Query

interface CocktailInterfaceApi {

    @GET("/api/json/v1/1/filter.php?g=Cocktail_glass")
    fun getDrinks(): Single<DrinksResult>

    @GET("/api/json/v1/1/lookup.php")
    fun getDetailDrink(@Query("i") idDrink: String): Single<DrinkDetailResult>
}