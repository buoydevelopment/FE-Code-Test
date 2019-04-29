package com.granitosdearena.matiaslev.cocktails.data.mappers.cocktailPreview

import com.granitosdearena.matiaslev.cocktails.CocktailFactory
import com.granitosdearena.matiaslev.cocktails.data.cloud.model.CocktailPreviewCloudList
import com.granitosdearena.matiaslev.cocktails.data.database.model.CocktailPreviewDatabase
import org.junit.Assert.assertEquals
import org.junit.Test

class CocktailPreviewCloudToDatabaseMapperTest {

    private val mapperUnderTest =
        CocktailPreviewCloudToDatabaseMapper()

    @Test
    fun `transform should get CocktailPreviewDataList and return a list of CocktailPreview`() {
        val mapperResult = mapperUnderTest.transform(CocktailFactory.newCocktailPreviewCloudClass())
        assertEquals(CocktailPreviewDatabase::class, mapperResult.first()::class)
    }

}