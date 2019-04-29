package com.granitosdearena.matiaslev.cocktails.domain

class GetCocktailUseCase(val cocktailsRepository: CocktailsRepository) {
    operator fun invoke(drinkId: String) = cocktailsRepository.getCocktail(drinkId)
}