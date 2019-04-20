package com.buoy.codetest.ui.home

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.buoy.codetest.model.domain.Drink
import com.buoy.codetest.model.repository.CocktailRepository
import com.buoy.codetest.ui.common.BaseViewModel
import io.reactivex.Single
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.schedulers.Schedulers

class HomeViewModel(val cocktailRepository: CocktailRepository): BaseViewModel() {


    private var drinks: List<Drink>? = null
    private val filterDrinks = MutableLiveData<List<Drink>>()

    private var filterText: String? = null

    fun getDrinks(): LiveData<List<Drink>> = filterDrinks
    fun getFilter(): String? = filterText

    init {
        requestDrinks()
    }

    fun requestDrinks() {
        setState(State.LOADING)

        cocktailRepository.getAllCocktails()
            .flatMap { drinks ->
                this.drinks = drinks
                executeFilter()
            }
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe ({
                    setState(State.SUCCESS)
                }, { error ->
                    Log.e("HomeViewModel", "requestDrinks:", error)
                    setState(State.ERROR)
                })


    }

    fun filterList(newText: String?) {
        filterText = newText
        executeFilter()
            .subscribeOn(Schedulers.io())
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe ({}, {})
    }

    private fun executeFilter(): Single<Boolean> {
        return Single.create { emitter ->
            drinks?.let { drinks ->

                val filter = filterText?.let { it.toLowerCase() } ?: ""
                if (filter.isNotEmpty()) {
                    val filterList = drinks.filter { drink -> drink.strDrink?.toLowerCase()?.contains(filter) ?: false }
                    filterDrinks.postValue(filterList)
                } else {
                    filterDrinks.postValue(drinks)
                }
            }

            emitter.onSuccess(true)
        }
    }
}