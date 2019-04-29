package com.granitosdearena.matiaslev.cocktails.presentation.viewModels

import androidx.lifecycle.ViewModel
import com.granitosdearena.matiaslev.cocktails.domain.Cocktail
import com.granitosdearena.matiaslev.cocktails.domain.CocktailsRepository
import com.granitosdearena.matiaslev.cocktails.domain.GetCocktailUseCase
import io.reactivex.Observable

class CocktailViewModel(val getCocktailUseCase: GetCocktailUseCase): ViewModel() {

    fun getCockailById(cocktailId: String): Observable<Cocktail> = getCocktailUseCase(cocktailId)

}