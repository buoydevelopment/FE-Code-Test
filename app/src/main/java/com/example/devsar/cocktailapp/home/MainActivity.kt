package com.example.devsar.cocktailapp.home

import android.content.Context
import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v7.widget.LinearLayoutManager
import android.view.View
import android.widget.Toast
import com.example.devsar.cocktailapp.R
import com.example.devsar.cocktailapp.home.model.Drink
import detailCocktail.DetailCocktailActivity
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity(), HomePresentation, OnDrinkClickListener {

    private lateinit var presenter: HomePresenter
    private val TAG:String = "MainActivity"
    private lateinit var viewAdapter: DrinkAdapter

    companion object {
        const val DETAIL_DRINK = "drinkId"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        initRecycler()
        presenter = HomePresenter(this)
        presenter.loadDrinks()
    }

    override fun onDestroy() {
        super.onDestroy()
        presenter.onDestroy()
    }

    private fun initRecycler(){
        recyclerMain.run {
            viewAdapter = DrinkAdapter(this@MainActivity)
            adapter = viewAdapter
            layoutManager = LinearLayoutManager(this@MainActivity)

            hasFixedSize()
        }
    }

    override fun showError(error: String) {
        Toast.makeText(this,error,Toast.LENGTH_LONG).show()
    }

    override fun showError(error: String, throwable: Throwable) {
        Toast.makeText(this,error,Toast.LENGTH_LONG).show()
    }

    override fun getContext(): Context {
        return this
    }

    override fun onDrinkClicked(drink: Drink) {
        intent = Intent(this, DetailCocktailActivity::class.java)
        intent.putExtra(DETAIL_DRINK, drink.idDrink )
        startActivity(intent)
    }

    override fun newItem(drink: Drink) {
       //TODO new item
    }

    override fun showConnectionError() {
        //TODO add connection error
    }

    override fun endLoading() {
        homeProgressbar.visibility = View.GONE
    }

    override fun startLoading() {
        homeProgressbar.visibility = View.VISIBLE
    }

    override fun updateDrinks(drinks: MutableList<Drink>?) {
        drinks?.let {
            viewAdapter.loadDrinks(it)
        }
    }

}
