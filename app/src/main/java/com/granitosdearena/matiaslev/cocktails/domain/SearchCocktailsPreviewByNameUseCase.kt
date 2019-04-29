package com.granitosdearena.matiaslev.cocktails.domain

class SearchCocktailsPreviewByNameUseCase(val cocktailsRepository: CocktailsRepository) {
    operator fun invoke(name: String) = cocktailsRepository.searchCocktailsPreviewByName(name)
}