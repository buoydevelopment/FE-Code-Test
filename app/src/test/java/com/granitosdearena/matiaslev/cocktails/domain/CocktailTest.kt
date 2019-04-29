package com.granitosdearena.matiaslev.cocktails.domain

import org.junit.Assert.assertEquals
import org.junit.Test

class CocktailTest {

    private val INGREDIENT = "ingredient"
    private val INGREDIENT_BLANK = " "
    private val MEASURE = "measure"
    private val MEASURE_BLANK = " "
    private val cocktail = Cocktail(
        "123",
        "test drink",
        "http://fake.url.com",
    "shake shake and drink!",
        listOf(INGREDIENT, INGREDIENT),
        listOf(MEASURE, MEASURE)
    )

    @Test
    fun `getIngredientsWithMeasures should return a string with measure + instruction on each line`() {
        assertEquals(
            "$MEASURE - $INGREDIENT \n$MEASURE - $INGREDIENT \n",
            cocktail.getIngredientsWithMeasures()
        )
    }

}