package com.granitosdearena.matiaslev.cocktails.data.mappers.cocktail

import com.granitosdearena.matiaslev.cocktails.CocktailFactory
import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailCloud
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailDatabase
import org.junit.Assert.assertEquals
import org.junit.Test

class CocktailCloudToDatabaseMapperTest {

    private val mapperUnderTest = CocktailCloudToDatabaseMapper()

    @Test
    fun `transform should get CocktailCloud and return CocktailDatabase`() {
        val mapperResult = mapperUnderTest.transform(CocktailFactory.newCocktailCloud())
        assertEquals(CocktailDatabase::class, mapperResult::class)
    }

}