package com.kimboo.mvvmkotlin.ui.cocktaillist.adapter

import android.arch.lifecycle.ViewModel
import android.databinding.ObservableField
import android.view.View
import com.kimboo.mvvmkotlin.model.Cocktail


/**
 * Created by Agustin Tomas Larghi on 7/3/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
class CocktailItemViewModel(var callback: Callback): ViewModel() {

    //region Variables declaration
    val cocktailItem = ObservableField<Cocktail>()
    //endregion

    //region ViewModel lifecycle methods declaration
    constructor(cocktail: Cocktail, callback: Callback) : this(callback) {
        cocktailItem.set(cocktail)
    }
    //endregion

    //region Public methods declaration
    fun onWholeLayoutClicked(view : View?) {
        cocktailItem.get()?.let {
            callback.onWholeLayoutClicked(view, it)
        }
    }
    //endregion

    //region Callback inferace declaration
    /**
     * To communicate back to the {@link CocktailAdapter}
     */
    interface Callback {
        fun onWholeLayoutClicked(view: View?, cocktail: Cocktail)
    }
    //endregion

}