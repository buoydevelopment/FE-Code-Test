package com.hattrick.fecodetest.ui.viewmodels

import com.hattrick.fecodetest.R
import com.hattrick.fecodetest.common.model.Result
import com.hattrick.fecodetest.model.Cocktail
import com.hattrick.fecodetest.repositories.CocktailsRepository
import io.reactivex.Observable
import io.reactivex.subjects.PublishSubject


class CocktailDetailsViewModel {

    //region Inputs
    val tryFetchCocktailDetails: PublishSubject<String> = PublishSubject.create()
    //endregion

    //region Outputs
    val cocktail: Observable<Cocktail>
    val errorResId: Observable<Int>
    val loader: Observable<Boolean>
    //endregion

    private val showLoader: PublishSubject<Boolean> = PublishSubject.create()

    init {
        loader = showLoader

        val fetchDetails = tryFetchCocktailDetails
            .doOnNext { showLoader.onNext(true) }
            .flatMap {
                CocktailsRepository.fetchCocktailDetails(it)
            }.share()

        cocktail = fetchDetails
            .filter { it is Result.Success }
            .map { (it as Result.Success).body }
            .doOnNext { showLoader.onNext(false) }

        errorResId = fetchDetails
            .filter { it is Result.Error }
            .map { R.string.error_fetching_cocktails }
            .doOnNext { showLoader.onNext(false) }
    }

}