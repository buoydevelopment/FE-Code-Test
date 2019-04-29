package com.granitosdearena.matiaslev.cocktails.domain

import io.mockk.mockk
import io.mockk.verify
import org.junit.Test

class SearchCocktailPreviewByNameUseCase {

    private val repository = mockk<CocktailsRepository>(relaxed = true)
    private val useCaseUnderTest = SearchCocktailsPreviewByNameUseCase(repository)

    @Test
    fun `should delegate the work to the repository`() {
        useCaseUnderTest("Some Name")
        verify { repository.searchCocktailsPreviewByName("Some Name") }
    }

}