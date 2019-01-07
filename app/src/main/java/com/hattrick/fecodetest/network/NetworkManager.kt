package com.hattrick.fecodetest.network

import android.content.Context
import android.net.ConnectivityManager
import android.net.NetworkInfo
import com.hattrick.fecodetest.App
import com.hattrick.fecodetest.BuildConfig
import com.hattrick.fecodetest.common.network.ErrorMapper
import com.hattrick.fecodetest.model.CocktailWrapper
import io.reactivex.Observable
import io.reactivex.schedulers.Schedulers
import retrofit2.Retrofit
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory
import retrofit2.converter.gson.GsonConverterFactory
import com.hattrick.fecodetest.common.model.Result
import com.hattrick.fecodetest.model.Cocktail
import okhttp3.Cache
import okhttp3.OkHttpClient

object NetworkManager {

    private const val CACHE_SIZE = 4 * 1024 * 1024 // 3 mb
    private const val REQUEST_MAX_AGE = 60 // 60 seconds
    private const val REQEST_MAX_STALE =  60 * 60 * 24 * 7 // 7 days

    private val retrofit: Retrofit
    private val service: CocktailInterface

    init {

        val cacheSize = (CACHE_SIZE).toLong()
        val myCache = Cache(App.instance.cacheDir, cacheSize)

        val okHttpClient = OkHttpClient.Builder()
            .cache(myCache)
            .addInterceptor { chain ->
                var request = chain.request()
                request = if (hasNetwork(App.instance)!!) {
                    request.newBuilder().header("Cache-Control", "public, max-age=$REQUEST_MAX_AGE").build()
                } else {
                    request.newBuilder().header("Cache-Control", "public, only-if-cached, max-stale=$REQEST_MAX_STALE")
                        .build()
                }
                return@addInterceptor chain.proceed(request)
            }
            .build()

        retrofit = Retrofit.Builder()
            .baseUrl(BuildConfig.BASE_URL)
            .addConverterFactory(GsonConverterFactory.create())
            .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
            .client(okHttpClient)
            .build()

        service = retrofit.create<CocktailInterface>(CocktailInterface::class.java)
    }

    private fun hasNetwork(context: Context): Boolean? {
        var isConnected: Boolean? = false // Initial Value
        val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val activeNetwork: NetworkInfo? = connectivityManager.activeNetworkInfo
        if (activeNetwork != null && activeNetwork.isConnected)
            isConnected = true
        return isConnected
    }

    fun fetchCocktails(): Observable<Result<List<CocktailWrapper>>> {
        return service.getCocktails()
            .filter { it.data != null }
            .map<Result<List<CocktailWrapper>>> { Result.Success(body = it.data!!) }
            .onErrorReturn { error -> return@onErrorReturn ErrorMapper.map<List<CocktailWrapper>>(error, retrofit) }
            .subscribeOn(Schedulers.io())
    }

    fun fetchCocktailDetails(cocktailId: String): Observable<Result<Cocktail>> {
        return service.getCocktailDetails(cocktailId)
            .filter { it.data != null && it.data!!.isNotEmpty() }
            .map<Result<Cocktail>> { Result.Success(body = it.data!!.first()) }
            .onErrorReturn { error -> return@onErrorReturn ErrorMapper.map<Cocktail>(error, retrofit) }
            .subscribeOn(Schedulers.io())
    }

}