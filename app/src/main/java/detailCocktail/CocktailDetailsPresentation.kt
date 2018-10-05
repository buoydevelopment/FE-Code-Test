package detailCocktail

import com.example.devsar.cocktailapp.home.model.DrinkDetail
import views.BasePresentation

interface CocktailDetailsPresentation: BasePresentation {
    fun showDetail(drink: DrinkDetail)
}
