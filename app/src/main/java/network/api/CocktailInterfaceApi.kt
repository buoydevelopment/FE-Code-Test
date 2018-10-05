package network.api

import com.example.devsar.cocktailapp.home.model.Drink
import io.reactivex.Single
import retrofit2.http.GET

interface CocktailInterfaceApi {

    @GET("/api/json/v1/1/filter.php?g=Cocktail_glass")
    fun getDrinks(): Single<MutableList<Drink>>


}