package com.granitosdearena.matiaslev.cocktails.domain

import io.mockk.mockk
import io.mockk.verify
import org.junit.Test

class GetCocktailsPreviewUseCaseTest {
    private val repository = mockk<CocktailsRepository>(relaxed = true)
    private val useCaseUnderTest = GetCocktailsPreviewUseCase(repository)

    @Test
    fun `should delegate the work to the repository`() {
        useCaseUnderTest()
        verify { repository.syncCockailsPreview() }
    }
}