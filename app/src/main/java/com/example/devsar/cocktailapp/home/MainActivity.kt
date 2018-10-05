package com.example.devsar.cocktailapp.home

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v7.widget.LinearLayoutManager
import com.example.devsar.cocktailapp.R
import com.example.devsar.cocktailapp.home.model.Drink
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    private lateinit var viewAdapter: DrinkAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        initRecycler()
    }

    private fun initRecycler(){
        recyclerMain.run {
            viewAdapter = DrinkAdapter()
            val drinks = mutableListOf<Drink>()
            drinks.add(Drink(16108.toDouble(),"9 1/2 Weeks","https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg"))
            drinks.add(Drink(11002.toDouble(), "A. J.", "https://www.thecocktaildb.com/images/media/drink/uryyrr1472811418.jpg"))
            drinks.add(Drink(17222.toDouble(), "A1", "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg"))
            viewAdapter.drinkList = drinks
            adapter = viewAdapter
            layoutManager = LinearLayoutManager(this@MainActivity)
            hasFixedSize()
        }
    }

}
