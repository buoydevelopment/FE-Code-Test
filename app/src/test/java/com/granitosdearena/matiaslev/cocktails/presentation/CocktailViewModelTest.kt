package com.granitosdearena.matiaslev.cocktails.presentation

import com.granitosdearena.matiaslev.cocktails.domain.GetCocktailUseCase
import com.granitosdearena.matiaslev.cocktails.presentation.viewModels.CocktailViewModel
import io.mockk.mockk
import io.mockk.verify
import org.junit.Test

class CocktailViewModelTest {

    val id = "1"
    val cocktailUseCase = mockk<GetCocktailUseCase>(relaxed = true)
    val viewModelUnderTest = CocktailViewModel(cocktailUseCase)

    @Test
    fun `getCockailsPreview should ask to the repository for sync the CocktailsPreview`() {
        viewModelUnderTest.getCockailById(id)
        verify { cocktailUseCase(id) }
    }

}