package com.granitosdearena.matiaslev.cocktails.domain

import androidx.paging.PagedList
import io.reactivex.Observable

interface CocktailsRepository {
    // TODO: Not Use PagedList in domain!! we are coupled for this reason.
    fun syncCockailsPreview(): Observable<PagedList<CocktailPreview>>
    fun searchCocktailsPreviewByName(name: String): Observable<PagedList<CocktailPreview>>
    fun getCocktail(drinkId: String): Observable<Cocktail>
}