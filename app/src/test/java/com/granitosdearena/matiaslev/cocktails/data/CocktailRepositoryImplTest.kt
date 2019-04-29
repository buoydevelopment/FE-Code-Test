package com.granitosdearena.matiaslev.cocktails.data

import com.granitosdearena.matiaslev.cocktails.CocktailFactory
import com.granitosdearena.matiaslev.cocktails.data.cloud.CocktailsApi
import com.granitosdearena.matiaslev.cocktails.data.database.AppDatabase
import com.granitosdearena.matiaslev.cocktails.data.mappers.cocktail.CocktailCloudToDatabaseMapper
import com.granitosdearena.matiaslev.cocktails.data.mappers.cocktail.ToCocktailFromDatabaseMapper
import com.granitosdearena.matiaslev.cocktails.data.mappers.cocktailPreview.CocktailPreviewCloudToDatabaseMapper
import com.granitosdearena.matiaslev.cocktails.data.mappers.cocktailPreview.ToCocktailPreviewFromDatabaseMapper
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import io.reactivex.Single
import io.reactivex.disposables.CompositeDisposable
import org.junit.Test

class CocktailRepositoryImplTest {

    val id = "1"
    val cocktailsApi = mockk<CocktailsApi>(relaxed = true)
    val database = mockk<AppDatabase>(relaxed = true)
    val cocktailPreviewCloudToDatabaseMapper = mockk<CocktailPreviewCloudToDatabaseMapper>()
    val cocktailCloudToDatabaseMapper = mockk<CocktailCloudToDatabaseMapper>()
    val toCocktailPreviewFromDatabaseMapper = mockk<ToCocktailPreviewFromDatabaseMapper>()
    val toCocktailFromDatabaseMapper = mockk<ToCocktailFromDatabaseMapper>()
    val disposables = mockk<CompositeDisposable>(relaxed = true)
    val repositoryUnderTest = CocktailsRepositoryImpl(cocktailsApi, database, disposables, cocktailPreviewCloudToDatabaseMapper,
        cocktailCloudToDatabaseMapper, toCocktailPreviewFromDatabaseMapper, toCocktailFromDatabaseMapper)

    @Test
    fun `getCockailsPreview should call the getCockailsPreview api`() {
        repositoryUnderTest.syncCockailsPreview()
        verify { cocktailsApi.getCockailsPreview() }
    }

    @Test
    fun `getCockailsPreview should insert the data returned by the api`() {
        val apiResponse = Single.just(CocktailFactory.newCocktailPreviewCloudClass())
        every { cocktailsApi.getCockailsPreview() } returns apiResponse
        every { cocktailPreviewCloudToDatabaseMapper.transform(CocktailFactory.newCocktailPreviewCloudClass()) } returns CocktailFactory.newCocktailPreviewDatabaseList()

        repositoryUnderTest.syncCockailsPreview()

        verify { database.cocktailPreviewDao().insertAll(CocktailFactory.newCocktailPreviewDatabaseList()) }
    }

    @Test
    fun `getCockailsPreview should get the data from the database`() {
        repositoryUnderTest.syncCockailsPreview()
        verify { database.cocktailPreviewDao().getAll() }
    }

    @Test
    fun `getCocktail should call the getCocktail api`() {
        repositoryUnderTest.getCocktail(id)
        verify { cocktailsApi.getCocktail(id) }
    }

    @Test
    fun `getCocktail should insert the data returned by the api`() {
        val apiResponse = Single.just(CocktailFactory.newCocktailCloudClass())
        every { cocktailsApi.getCocktail(id) } returns apiResponse
        every { cocktailCloudToDatabaseMapper.transform(CocktailFactory.newCocktailCloud()) } returns CocktailFactory.newCocktailDatabase()

        repositoryUnderTest.getCocktail(id)

        verify { database.cocktailDao().insert(CocktailFactory.newCocktailDatabase()) }
    }

    @Test
    fun `getCocktail should get the data from the database`() {
        repositoryUnderTest.getCocktail(id)
        verify { database.cocktailDao().searchCocktailById(id.toInt()) }
    }

    @Test
    fun `searchCocktailsPreviewByName should get the names that match to the search from the database with the % prefixes`() {
        repositoryUnderTest.searchCocktailsPreviewByName("Some Name")
        verify { database.cocktailPreviewDao().searchCocktailPreviewByName("%Some Name%") }
    }
}