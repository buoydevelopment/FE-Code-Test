package com.granitosdearena.matiaslev.cocktails.data.mappers.cocktailPreview

import com.granitosdearena.matiaslev.cocktails.CocktailFactory
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailPreviewDatabase
import com.granitosdearena.matiaslev.cocktails.data.mappers.cocktailPreview.ToCocktailPreviewFromDatabaseMapper
import com.granitosdearena.matiaslev.cocktails.domain.CocktailPreview
import org.junit.Assert
import org.junit.Test

class ToCocktailPreviewFromDatabaseMapperTest {

    private val mapperUnderTest =
        ToCocktailPreviewFromDatabaseMapper()

    @Test
    fun `transform should get CocktailPreviewDatabase and return CocktailPreview`() {
        val mapperResult = mapperUnderTest.transform(CocktailFactory.newCocktailPreviewDatabase())
        Assert.assertEquals(CocktailPreview::class, mapperResult::class)
    }

}