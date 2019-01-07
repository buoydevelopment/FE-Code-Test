package com.hattrick.fecodetest.ui.viewmodels

import com.hattrick.fecodetest.R
import com.hattrick.fecodetest.model.CocktailWrapper
import io.reactivex.Observable
import io.reactivex.subjects.PublishSubject
import com.hattrick.fecodetest.common.model.Result
import com.hattrick.fecodetest.repositories.CocktailsRepository


class CocktailsListViewModel {

    //region Inputs
    val tryFetchCocktails: PublishSubject<Unit> = PublishSubject.create()
    //endregion

    //region Outputs
    val cocktails: Observable<List<CocktailWrapper>>
    val errorResId: Observable<Int>
    val loader: Observable<Boolean>
    //endregion

    private val showLoader: PublishSubject<Boolean> = PublishSubject.create()

    init {
        loader = showLoader
        val fetchCocktails = tryFetchCocktails
            .doOnNext { showLoader.onNext(true) }
            .flatMap {
                CocktailsRepository.fetchCocktails()
            }.share()

        cocktails = fetchCocktails
            .filter { it is Result.Success }
            .map { (it as Result.Success).body }
            .doOnNext { showLoader.onNext(false) }

        errorResId = fetchCocktails
            .filter { it is Result.Error }
            .map { R.string.error_fetching_cocktails }
            .doOnNext { showLoader.onNext(false) }
    }

}