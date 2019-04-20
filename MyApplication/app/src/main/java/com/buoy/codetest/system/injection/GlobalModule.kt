package com.buoy.codetest.system.injection

import com.buoy.codetest.model.api.CocktailApi
import com.buoy.codetest.model.repository.CocktailRepository
import com.buoy.codetest.model.repository.CocktailRepositoryImpl
import com.buoy.codetest.ui.cocktaildetail.CocktailDetailViewModel
import com.buoy.codetest.ui.home.HomeViewModel
import com.google.gson.GsonBuilder
import org.koin.androidx.viewmodel.dsl.viewModel
import org.koin.dsl.module
import retrofit2.Retrofit
import retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory
import retrofit2.converter.gson.GsonConverterFactory
import okhttp3.OkHttpClient



private val retrofit: Retrofit = createNetworkClient()
private val cocktailApi: CocktailApi = retrofit.create(CocktailApi::class.java)

const val DATE_FORMAT = "yyyy-MM-dd'T'HH:mm:ss"


val viewModelModule = module {
    viewModel { CocktailDetailViewModel(get()) }
    viewModel { HomeViewModel(get()) }
}

val repositoryModule = module {
    single { CocktailRepositoryImpl(cocktailApi = get()) as CocktailRepository }
}

val networkModule = module {
    single { cocktailApi }
}


fun createNetworkClient(): Retrofit {
    val gson = GsonBuilder()
        .setDateFormat(DATE_FORMAT)
        .create()

    val okHttpClient = OkHttpClient().newBuilder().build()

    return Retrofit.Builder()
        .baseUrl(CocktailApi.URL)
        .client(okHttpClient)
        .addConverterFactory(GsonConverterFactory.create(gson))
        .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
        .build()
}

