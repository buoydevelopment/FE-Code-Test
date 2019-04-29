package com.granitosdearena.matiaslev.cocktails.presentation

import com.granitosdearena.matiaslev.cocktails.domain.GetCocktailsPreviewUseCase
import com.granitosdearena.matiaslev.cocktails.domain.SearchCocktailsPreviewByNameUseCase
import com.granitosdearena.matiaslev.cocktails.presentation.viewModels.CocktailPreviewViewModel
import io.mockk.mockk
import io.mockk.verify
import org.junit.Test

class CocktailPreviewViewModelTest {

    val cocktailsPreviewUseCase = mockk<GetCocktailsPreviewUseCase>(relaxed = true)
    val searchCocktailsPreviewByNameUseCase = mockk<SearchCocktailsPreviewByNameUseCase>(relaxed = true)
    val viewModelUnderTest = CocktailPreviewViewModel(cocktailsPreviewUseCase, searchCocktailsPreviewByNameUseCase)

    @Test
    fun `getCockailsPreview should ask to the repository for sync the CocktailsPreview`() {
        viewModelUnderTest.getCockailsPreview()
        verify { cocktailsPreviewUseCase() }
    }

    @Test
    fun `searchCocktailsPreviewByName should ask to the repository for get the cocktails that match with the search`() {
        viewModelUnderTest.searchCocktailsPreviewByName("Some Name")
        verify { searchCocktailsPreviewByNameUseCase("Some Name") }
    }

}