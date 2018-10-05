package network



import com.example.devsar.cocktailapp.BuildConfig
import network.api.CocktailInterfaceApi
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory
import retrofit2.converter.gson.GsonConverterFactory

object RetrofitSingleton  {
    private val okHttpClient = OkHttpClient().newBuilder()
            .addInterceptor(HttpLoggingInterceptor().apply {
                level = if (BuildConfig.DEBUG) HttpLoggingInterceptor.Level.BODY
                        else HttpLoggingInterceptor.Level.NONE
            })
            .build()

    private val retrofit:Retrofit= Retrofit.Builder()
                                  .baseUrl("http://www.thecocktaildb.com")
                                  .addConverterFactory(GsonConverterFactory.create())
                                  .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                                  .client(okHttpClient)
                                  .build()

    val service: CocktailInterfaceApi by lazy { retrofit.create(CocktailInterfaceApi::class.java) }

}