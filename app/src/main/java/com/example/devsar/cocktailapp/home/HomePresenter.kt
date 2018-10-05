package com.example.devsar.cocktailapp.home

import com.example.devsar.cocktailapp.home.model.Drink
import io.reactivex.Single
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.CompositeDisposable
import io.reactivex.rxkotlin.addTo
import io.reactivex.schedulers.Schedulers
import network.RetrofitSingleton
import views.CocktailView


class HomePresenter(private var presentation: CocktailView?) {

    private val TAG:String = "HomePresenter"

    private val compositeDisposable = CompositeDisposable()

    fun loadDrinks(){
        presentation?.startLoading()
        RetrofitSingleton.service.getDrinks()
                .doAfterTerminate {
                    presentation?.endLoading(false)
                }
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .map { it.drinks }
                .subscribe ({
                    drinks ->
                    presentation?.updateDrinks(drinks)
                },
                        {
                            presentation?.showError("There was a problem loading the drinks. Try again")
                        }).addTo(compositeDisposable)
    }

    fun onDestroy(){
        compositeDisposable.dispose()
        presentation = null
    }

}