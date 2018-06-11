package com.kimboo.mvvmkotlin.ui.cocktaillist

import android.arch.lifecycle.LiveData
import android.arch.lifecycle.MutableLiveData
import android.arch.lifecycle.Transformations
import android.arch.lifecycle.ViewModel
import android.databinding.BindingAdapter
import android.databinding.ObservableField
import android.support.design.widget.Snackbar
import android.view.View
import com.kimboo.mvvmkotlin.extensions.DataSource
import com.kimboo.mvvmkotlin.extensions.DataSourceSubscriber
import com.kimboo.mvvmkotlin.extensions.subscribe
import com.kimboo.mvvmkotlin.model.Cocktail
import com.kimboo.mvvmkotlin.retrofit.repositories.CocktailRepository
import javax.inject.Inject

/**
 * Created by Agustin Tomas Larghi on 5/3/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
//If you need queryAlcoholic context aware ViewModel you should use AndroidViewModel
class CocktailListViewModel @Inject constructor (val cocktailRepository: CocktailRepository): ViewModel() {

    //Notice that the variables are read-only, but not their properties
    val isLoading = ObservableField<Boolean>()
    val snackBarMessage = ObservableField<String>()
    val filterType = ObservableField<String>()

    private lateinit var cocktailList: LiveData<List<Cocktail>>
    val cocktailListSearchQuery = MutableLiveData<SearchCriteria>()
    // This is cocktailListSearchQuery very basic patter in MVVM to switch between streams
    // Sad thing is that only works with LiveData and not Observables, so I've to expose LiveData
    // from the Repository layer :/

    data class SearchCriteria(var query: String = "",
                              var filterType: String = "Cocktail_glass")


    fun buildCocktailListLiveData(): LiveData<List<Cocktail>> {
        cocktailList = Transformations.switchMap(cocktailListSearchQuery, { newQuery ->
            if (!newQuery.query.isNullOrBlank()) {
                cocktailRepository.getCocktailBySearchQuery(newQuery.query)
            } else {
                filterType.set(newQuery.filterType)
                cocktailRepository.getCocktailByFilters(newQuery.filterType)
            }
        })
        return cocktailList
    }

    fun onAlcoholChecked(isChecked: Boolean) {
        cocktailListSearchQuery.value?.let { searchCriteria ->
            if (isChecked) {
                searchCriteria.query = ""
                searchCriteria.filterType = "Alcoholic"
                cocktailListSearchQuery.postValue(searchCriteria)
            }
        }
    }

    fun onNonAlcoholChecked(isChecked: Boolean) {
        cocktailListSearchQuery.value?.let { searchCriteria ->
            if (isChecked) {
                searchCriteria.query = ""
                searchCriteria.filterType = "Non_Alcoholic"
                cocktailListSearchQuery.postValue(searchCriteria)
            }
        }
    }

    fun onCocktailGlassChecked(isChecked: Boolean) {
        cocktailListSearchQuery.value?.let { searchCriteria ->
            if (isChecked) {
                searchCriteria.query = ""
                searchCriteria.filterType = "Cocktail_glass"
                cocktailListSearchQuery.postValue(searchCriteria)
            }
        }
    }

    fun onChampagneFluteChecked(isChecked: Boolean) {
        cocktailListSearchQuery.value?.let { searchCriteria ->
            if (isChecked) {
                searchCriteria.query = ""
                searchCriteria.filterType = "Champagne_flute"
                cocktailListSearchQuery.postValue(searchCriteria)
            }
        }
    }

    fun onOrdinaryDrinkChecked(isChecked: Boolean) {
        cocktailListSearchQuery.value?.let { searchCriteria ->
            if (isChecked) {
                searchCriteria.query = ""
                searchCriteria.filterType = "Ordinary_Drink"
                cocktailListSearchQuery.postValue(searchCriteria)
            }
        }
    }

    fun onCocktailDrinkChecked(isChecked: Boolean) {
        cocktailListSearchQuery.value?.let { searchCriteria ->
            if (isChecked) {
                searchCriteria.query = ""
                searchCriteria.filterType = "Cocktail"
                cocktailListSearchQuery.postValue(searchCriteria)
            }
        }
    }

    fun fetchCocktails() {
        cocktailListSearchQuery.postValue(SearchCriteria())

        isLoading.set(true)
        cocktailRepository.fetchCocktails()
            .subscribe(object: DataSourceSubscriber<List<Cocktail>>() {
                override fun onError(t: Throwable?) {
                    snackBarMessage.set(t?.localizedMessage)
                    snackBarMessage.notifyChange()
                    isLoading.set(false)
                    isLoading.notifyChange()
                }

                override fun onNext(dataSource: DataSource<List<Cocktail>>) {
                    isLoading.set(false)
                    isLoading.notifyChange()
                }

                override fun onComplete() {
                    isLoading.set(false)
                    isLoading.notifyChange()
                }
            });
    }


    fun searchDrink(query: String = "") {
        cocktailListSearchQuery.postValue(SearchCriteria(query))
    }

    companion object {
        @JvmStatic @BindingAdapter(value = "app:showSnackbar", requireAll = true)
        fun bindSnackBar(view: View, showSnackbar: String?) {
            showSnackbar?.let {
                Snackbar.make(view, showSnackbar, Snackbar.LENGTH_LONG).show();
            }
        }
    }

}