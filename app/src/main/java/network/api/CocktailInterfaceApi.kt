package network.api

import com.example.devsar.cocktailapp.home.model.DrinkDetail
import io.reactivex.Single
import retrofit2.http.GET
import retrofit2.http.Path

interface CocktailInterfaceApi {

    @GET("/api/json/v1/1/filter.php?g=Cocktail_glass")
    fun getDrinks(): Single<DrinksResult>

    @GET("/api/json/v1/1/lookup.php{idDrink}")
    fun getDetailDrink(@Path("idDrink") idDrink: String): Single<DrinkDetail>
}