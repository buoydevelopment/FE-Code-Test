package com.kimboo.mvvmkotlin.ui.cocktaillist

import android.view.View
import com.kimboo.mvvmkotlin.model.Cocktail

/**
 * Created by Agustin Tomas Larghi on 31/5/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
interface MainActivityCallback {
    fun onCocktailClicked(view: View?, cocktail: Cocktail)
}