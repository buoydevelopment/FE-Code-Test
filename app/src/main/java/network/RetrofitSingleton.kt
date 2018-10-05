package network

import com.example.devsar.cocktailapp.BuildConfig
import com.example.devsar.cocktailapp.home.model.DrinkDetail
import com.example.devsar.cocktailapp.home.model.DrinkDetailJson
import com.squareup.moshi.FromJson
import com.squareup.moshi.Moshi
import com.squareup.moshi.ToJson
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import network.api.CocktailInterfaceApi
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory
import retrofit2.converter.moshi.MoshiConverterFactory

object RetrofitSingleton  {

    private val BASE_URL = "http://www.thecocktaildb.com"
    private val okHttpClient = OkHttpClient().newBuilder()
            .addInterceptor(HttpLoggingInterceptor().apply {
                level = if (BuildConfig.DEBUG) HttpLoggingInterceptor.Level.BODY
                        else HttpLoggingInterceptor.Level.NONE
            })
            .build()

    private val retrofit:Retrofit= Retrofit.Builder()
                                  .baseUrl(BASE_URL)
                                  .addConverterFactory(MoshiConverterFactory.create(Moshi.Builder()
                                          .add(DrinkDetailJsonAdapter())
                                          .add(KotlinJsonAdapterFactory())
                                          .build()))
                                  .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                                  .client(okHttpClient)
                                  .build()

    val service: CocktailInterfaceApi by lazy { retrofit.create(CocktailInterfaceApi::class.java) }

    internal class DrinkDetailJsonAdapter {
        @FromJson
        fun drinkDetailFromJson(drinkDetailJson: DrinkDetailJson): DrinkDetail {
            val ingredients = mutableListOf<String?>()
            ingredients.add(drinkDetailJson.strIngredient1)
            ingredients.add(drinkDetailJson.strIngredient2)
            ingredients.add(drinkDetailJson.strIngredient3)
            ingredients.add(drinkDetailJson.strIngredient4)
            ingredients.add(drinkDetailJson.strIngredient5)
            ingredients.add(drinkDetailJson.strIngredient6)
            ingredients.add(drinkDetailJson.strIngredient7)
            ingredients.add(drinkDetailJson.strIngredient8)
            ingredients.add(drinkDetailJson.strIngredient9)
            ingredients.add(drinkDetailJson.strIngredient10)
            ingredients.add(drinkDetailJson.strIngredient11)
            ingredients.add(drinkDetailJson.strIngredient12)
            ingredients.add(drinkDetailJson.strIngredient13)
            ingredients.add(drinkDetailJson.strIngredient14)
            return DrinkDetail(drinkDetailJson.idDrink,
                    drinkDetailJson.strDrink,
                    drinkDetailJson.strInstructions,
                    drinkDetailJson.strDrinkThumb,
                    ingredients)
        }

        @ToJson
        fun drinkToJson(drinkDetail: DrinkDetail): DrinkDetailJson {
            return DrinkDetailJson(drinkDetail.idDrink,
                    drinkDetail.strDrink,
                    drinkDetail.strInstructions,
                    drinkDetail.strDrinkThumb,
                    drinkDetail.ingredients?.get(0),
                    drinkDetail.ingredients?.get(1),
                    drinkDetail.ingredients?.get(2),
                    drinkDetail.ingredients?.get(3),
                    drinkDetail.ingredients?.get(4),
                    drinkDetail.ingredients?.get(5),
                    drinkDetail.ingredients?.get(6),
                    drinkDetail.ingredients?.get(7),
                    drinkDetail.ingredients?.get(8),
                    drinkDetail.ingredients?.get(9),
                    drinkDetail.ingredients?.get(10),
                    drinkDetail.ingredients?.get(11),
                    drinkDetail.ingredients?.get(12),
                    drinkDetail.ingredients?.get(13),
                    drinkDetail.ingredients?.get(14))
        }
    }

}
