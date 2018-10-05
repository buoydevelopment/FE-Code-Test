package views

import android.content.Context
import com.example.devsar.cocktailapp.home.model.Drink
import network.api.DrinkDetailResult

interface CocktailView {

    fun showError(error: String)
    fun showError(error: String, throwable: Throwable)
    fun getContext(): Context
    fun showMoreInfo(drink:Drink)
    fun newItem(drink: Drink)
    fun showConnectionError()
    fun endLoading()
    fun startLoading()
    fun updateDrinks(drinks: MutableList<Drink>?)
}