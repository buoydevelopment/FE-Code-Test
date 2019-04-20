package com.buoy.codetest.ui.cocktaildetail

import android.util.Log
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import com.buoy.codetest.model.domain.Drink
import com.buoy.codetest.model.repository.CocktailRepository
import com.buoy.codetest.ui.common.BaseViewModel
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.schedulers.Schedulers

class CocktailDetailViewModel(val cocktailRepository: CocktailRepository): BaseViewModel() {

    private val drink = MutableLiveData<Drink>()
    fun getDrink(): LiveData<Drink> = drink

    fun initialize(drink: Drink) {
        this.drink.value = drink
        requestDrinkDetail(drink.idDrink)
    }

    private fun requestDrinkDetail(cocktailId: String?) {
        cocktailId?.let { id ->
            setState(State.LOADING)
            cocktailRepository.getCocktailDetail(id)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribe ({ result ->
                    drink.value = result
                    setState(State.SUCCESS)
                }, { error ->
                    Log.e("HomeViewModel", "requestDrinks:", error)
                    setState(State.ERROR)
                })

        }

    }
}