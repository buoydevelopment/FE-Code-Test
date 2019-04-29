package com.granitosdearena.matiaslev.cocktails.presentation.viewModels

import androidx.lifecycle.ViewModel
import androidx.paging.PagedList
import com.granitosdearena.matiaslev.cocktails.domain.CocktailPreview
import com.granitosdearena.matiaslev.cocktails.domain.GetCocktailsPreviewUseCase
import com.granitosdearena.matiaslev.cocktails.domain.SearchCocktailsPreviewByNameUseCase
import io.reactivex.Observable

class CocktailPreviewViewModel(
    private val getCocktailsPreviewUseCase: GetCocktailsPreviewUseCase,
    private val searchCocktailsPreviewByNameUseCase: SearchCocktailsPreviewByNameUseCase
): ViewModel() {

    fun getCockailsPreview(): Observable<PagedList<CocktailPreview>> = getCocktailsPreviewUseCase()

    fun searchCocktailsPreviewByName(name: String): Observable<PagedList<CocktailPreview>> =
        searchCocktailsPreviewByNameUseCase(name)

}