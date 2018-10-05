package detailCocktail

import com.example.devsar.cocktailapp.home.model.DrinkDetail

interface CocktailDetailsPresentation {
    fun showDetail(drink: DrinkDetail)
    fun startLoading()
    fun endLoading()
    fun showError(s: String)

}
