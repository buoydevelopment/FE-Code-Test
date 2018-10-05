package com.example.devsar.cocktailapp.home

import android.content.Context
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v7.widget.LinearLayoutManager
import android.view.View
import android.widget.Toast
import com.example.devsar.cocktailapp.R
import com.example.devsar.cocktailapp.home.model.Drink
import kotlinx.android.synthetic.main.activity_main.*
import views.CocktailView

class MainActivity : AppCompatActivity(), CocktailView {

    private lateinit var presenter: HomePresenter
    private val TAG:String = "MainActivity"
    private lateinit var viewAdapter: DrinkAdapter

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
            viewAdapter = DrinkAdapter()
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

    override fun showMoreInfo(drink: Drink) {
      //TODO show ingredients
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
