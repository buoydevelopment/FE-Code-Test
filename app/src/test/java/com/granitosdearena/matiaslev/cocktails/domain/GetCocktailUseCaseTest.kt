package com.granitosdearena.matiaslev.cocktails.domain

import io.mockk.mockk
import io.mockk.verify
import org.junit.Test

class GetCocktailUseCaseTest {

    private val repository = mockk<CocktailsRepository>(relaxed = true)
    private val useCaseUnderTest = GetCocktailUseCase(repository)

    @Test
    fun `should delegate the work to the repository`() {
        useCaseUnderTest("1")
        verify { repository.getCocktail("1") }
    }
}