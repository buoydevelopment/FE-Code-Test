package com.granitosdearena.matiaslev.cocktails.data

import android.util.Log
import androidx.paging.PagedList
import androidx.paging.toObservable
import com.granitosdearena.matiaslev.cocktails.data.cloud.CocktailsApi
import com.granitosdearena.matiaslev.cocktails.data.database.AppDatabase
import com.granitosdearena.matiaslev.cocktails.data.mappers.cocktail.CocktailCloudToDatabaseMapper
import com.granitosdearena.matiaslev.cocktails.data.mappers.cocktail.ToCocktailFromDatabaseMapper
import com.granitosdearena.matiaslev.cocktails.data.mappers.cocktailPreview.CocktailPreviewCloudToDatabaseMapper
import com.granitosdearena.matiaslev.cocktails.data.mappers.cocktailPreview.ToCocktailPreviewFromDatabaseMapper
import com.granitosdearena.matiaslev.cocktails.domain.Cocktail
import com.granitosdearena.matiaslev.cocktails.domain.CocktailPreview
import com.granitosdearena.matiaslev.cocktails.domain.CocktailsRepository
import com.granitosdearena.matiaslev.cocktails.presentation.viewModels.CocktailPreviewViewModel
import io.reactivex.Observable
import io.reactivex.disposables.CompositeDisposable
import io.reactivex.rxkotlin.subscribeBy
import io.reactivex.schedulers.Schedulers

class CocktailsRepositoryImpl(val cocktailsApi: CocktailsApi,
                              val database: AppDatabase,
                              val disposables: CompositeDisposable,
                              val cocktailPreviewCloudToDatabaseMapper: CocktailPreviewCloudToDatabaseMapper,
                              val cocktailCloudToDatabaseMapper: CocktailCloudToDatabaseMapper,
                              val toCocktailPreviewFromDatabaseMapper: ToCocktailPreviewFromDatabaseMapper,
                              val toCocktailFromDatabaseMapper: ToCocktailFromDatabaseMapper): CocktailsRepository {

    override fun syncCockailsPreview(): Observable<PagedList<CocktailPreview>> {
        val disposable = cocktailsApi.getCockailsPreview()
            .subscribeOn(Schedulers.io())
            .doOnError { Log.d(CocktailPreviewViewModel::class.java.canonicalName, it.message) }
            .map { database.cocktailPreviewDao().insertAll(cocktailPreviewCloudToDatabaseMapper.transform(it)) }
            .subscribeBy(
                onError =  { it.printStackTrace() },
                onSuccess = {  }
            )
        disposables.add(disposable)

        return database.cocktailPreviewDao().getAll()
            .map { toCocktailPreviewFromDatabaseMapper.transform(it) }
            .toObservable(10)
    }

    override fun searchCocktailsPreviewByName(name: String): Observable<PagedList<CocktailPreview>> =
        database.cocktailPreviewDao().searchCocktailPreviewByName("%$name%")
            .map { toCocktailPreviewFromDatabaseMapper.transform(it) }
            .toObservable(10)

    override fun getCocktail(drinkId: String): Observable<Cocktail> {
        val disposable = cocktailsApi.getCocktail(drinkId)
            .subscribeOn(Schedulers.io())
            .doOnError { Log.d(CocktailPreviewViewModel::class.java.canonicalName, it.message) }
            .filter { it.drinks.isNotEmpty() }
            .map { database.cocktailDao().insert(cocktailCloudToDatabaseMapper.transform(it.drinks.first())) }
            .subscribeBy(
                onError =  { it.printStackTrace() },
                onSuccess = {  }
            )
        disposables.add(disposable)

        return database.cocktailDao().searchCocktailById(drinkId.toInt())
            .map { toCocktailFromDatabaseMapper.transform(it) }
    }
}