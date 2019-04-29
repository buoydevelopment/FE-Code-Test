package com.granitosdearena.matiaslev.cocktails.domain

class GetCocktailsPreviewUseCase(val cockatilsRepository: CocktailsRepository) {
    operator fun invoke() = cockatilsRepository.syncCockailsPreview()
}