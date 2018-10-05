package com.example.devsar.cocktailapp.home

import android.content.Context
import com.example.devsar.cocktailapp.home.model.Drink
import views.BasePresentation

interface HomePresentation: BasePresentation {
    fun getContext(): Context
    fun showError(error: String, throwable: Throwable)
    fun newItem(drink: Drink)
    fun updateDrinks(drinks: MutableList<Drink>?)
}