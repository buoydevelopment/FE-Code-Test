package com.kimboo.mvvmkotlin.retrofit.repositories

import android.arch.lifecycle.LiveData
import android.arch.lifecycle.LiveDataReactiveStreams
import com.kimboo.mvvmkotlin.db.CocktailDao
import com.kimboo.mvvmkotlin.extensions.DataSource
import com.kimboo.mvvmkotlin.extensions.DataSourceSubscriber
import com.kimboo.mvvmkotlin.extensions.subscribe
import com.kimboo.mvvmkotlin.extensions.transformEntity
import com.kimboo.mvvmkotlin.model.Cocktail
import com.kimboo.mvvmkotlin.retrofit.api.CocktailApi
import com.kimboo.mvvmkotlin.retrofit.mappers.serverUserProfileCollectionToModel
import com.kimboo.mvvmkotlin.retrofit.mappers.serverUserProfileToModel
import com.kimboo.mvvmkotlin.retrofit.responses.ApiCocktailResponse
import io.reactivex.Flowable
import io.reactivex.Observable
import io.reactivex.schedulers.Schedulers
import retrofit2.Response

/**
 * Created by Agustin Tomas Larghi on 27/2/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
class CocktailRepositoryImp(val cocktailApi: CocktailApi, val cocktailDao: CocktailDao): CocktailRepository {

    override fun getCocktailBySearchQuery(query: String): LiveData<List<Cocktail>> {
        cocktailApi.getCocktailBySearchQuery(query)
                .transformEntity(::serverUserProfileCollectionToModel)
                .subscribeOn(Schedulers.io()) //We shouldn't write in the db over the UI thread!
                .subscribe(object: DataSourceSubscriber<List<Cocktail>>() {
                    override fun onResultNext(cocktails: List<Cocktail>) {
                        cocktailDao.storeCocktails(cocktails)
                    }
                })

        return LiveDataReactiveStreams.fromPublisher(
                cocktailDao.getAllCocktailsByQueryName("%$query%")
                .distinctUntilChanged()
        )
    }

    override fun getCocktailByFilters(filterType: String): LiveData<List<Cocktail>> {
        fetchCocktailsByFilterType(filterType)
                .transformEntity(::serverUserProfileCollectionToModel)
                .subscribeOn(Schedulers.io()) //We shouldn't write in the db over the UI thread!
                .subscribe(object: DataSourceSubscriber<List<Cocktail>>() {
                    override fun onResultNext(cocktails: List<Cocktail>) {
                        cocktails.forEach { cocktail ->
                            when (filterType) {
                                "Alcoholic" -> cocktail.alcoholic = "Alcoholic"
                                "Non_Alcoholic" -> cocktail.alcoholic = "Non Alcoholic"
                                "Cocktail_glass" -> cocktail.glass = "Cocktail glass"
                                "Champagne_flute" -> cocktail.glass = "Champagne flute"
                                "Ordinary_Drink" -> cocktail.category = "Ordinary Drink"
                                "Cocktail" -> cocktail.category = "Cocktail"
                            }
                        }
                        cocktailDao.storeCocktails(cocktails)
                    }
                })

        return LiveDataReactiveStreams.fromPublisher(
                getCocktailsByFilterType(filterType)
        )
    }

    private fun getCocktailsByFilterType(filterType: String): Flowable<List<Cocktail>> {
        return when(filterType) {
            "Alcoholic" -> cocktailDao.getAllCocktailsByAlcohol("Alcoholic")
            "Non_Alcoholic" -> cocktailDao.getAllCocktailsByAlcohol("Non_Alcoholic")
            "Cocktail_glass" -> cocktailDao.getAllCocktailsByGlass("Cocktail glass")
            "Champagne_flute" -> cocktailDao.getAllCocktailsByGlass("Champagne flute")
            "Ordinary_Drink" -> cocktailDao.getAllCocktailsByCategory("Ordinary Drink")
            "Cocktail" -> cocktailDao.getAllCocktailsByCategory("Cocktail")
            else -> cocktailDao.getAllCocktailsByQueryName("")
        }
    }

    fun fetchCocktailsByFilterType(filterType: String): Observable<Response<ApiCocktailResponse>> {
        return when(filterType) {
            "Alcoholic" -> cocktailApi.getCocktailsByAlcoholic(filterType)
            "Non_Alcoholic" -> cocktailApi.getCocktailsByAlcoholic(filterType)
            "Cocktail_glass" -> cocktailApi.getCocktailByGlass(filterType)
            "Champagne_flute" -> cocktailApi.getCocktailByGlass(filterType)
            "Ordinary_Drink" -> cocktailApi.getCocktailByCategory(filterType)
            "Cocktail" -> cocktailApi.getCocktailByCategory(filterType)
            else -> Observable.error(RuntimeException("Unknown filter type"))
        }
    }

    override fun getCocktail(email: String) = cocktailDao.getCocktailById(email).toObservable()

    override fun fetchCocktails(): Observable<DataSource<List<Cocktail>>> {
        return cocktailApi.getCocktailByFilters()
            .subscribeOn(Schedulers.io())
            .transformEntity(::serverUserProfileCollectionToModel)
            .doOnNext {dataSource ->
                dataSource.model?.let {
                    cocktailDao.storeCocktails(it)
                }
            }
    }

    override fun updateCocktail(cocktail: Cocktail) {
        cocktailDao.updateCocktail(cocktail)
    }

    override fun fetchCocktail(id: String): Observable<DataSource<Cocktail>> {
        return cocktailApi.getCocktailById(id)
            .subscribeOn(Schedulers.io())
            .transformEntity(::serverUserProfileToModel)
                .doOnNext {dataSource ->
                    dataSource.model?.let {
                        cocktailDao.updateCocktail(it)
                    }
                }
    }
}