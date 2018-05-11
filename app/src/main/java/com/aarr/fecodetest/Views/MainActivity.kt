package com.aarr.fecodetest.Views

import android.app.SearchManager
import android.content.Context
import android.content.Intent
import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.support.v7.widget.LinearLayoutManager
import android.support.v7.widget.SearchView
import android.view.Menu
import com.aarr.fecodetest.Adapters.DrinksAdapter
import com.aarr.fecodetest.Database.Dao.DrinksDao
import com.aarr.fecodetest.R
import com.aarr.fecodetest.Services.Apis.GetDrinksDetailsService
import com.aarr.fecodetest.Services.Apis.GetDrinksService
import com.aarr.fecodetest.Services.Async.SaveDrinkDetails
import com.aarr.fecodetest.Services.Async.SaveDrinks
import com.aarr.fecodetest.Services.Response.GetCocktailDetails.GetCocktailDetails
import com.aarr.fecodetest.Services.Response.GetCocktails.GetCocktails
import kotlinx.android.synthetic.main.activity_main.*
import android.net.ConnectivityManager
import android.widget.Toast


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        setSupportActionBar(toolbarMain)
        supportActionBar?.setDisplayShowTitleEnabled(false);

        refresh.setOnRefreshListener {
            if (!refresh.isRefreshing){
                updateDrinks()
            }
        }

        if (DrinksDao().findAllDrink(null)?.isNotEmpty()!!)
            initAndResetRecycler(null)
        else
            updateDrinks()
    }

    fun goDrinkDetails(id:Int){
        val intent = Intent(this,DrinksDetailsActivity::class.java)
        intent.putExtra("idDrink",id)
        startActivity(intent)
    }

    fun finishUpdating(){
        refresh.isRefreshing = false
        initAndResetRecycler(null)
    }

    fun initAndResetRecycler(search:String?){
        var items = DrinksDao().findAllDrink(search)
        if (items==null){
            items = emptyList()
        }
        val adapter = DrinksAdapter(this,items)
        recycler.adapter = null
        recycler.adapter = adapter
        recycler.layoutManager = LinearLayoutManager(this)
    }

    fun saveDrinks(drinks: GetCocktails?){
        SaveDrinks(this,drinks).execute()
    }

    fun saveDrinksDetails(drinks:GetCocktailDetails?){
        SaveDrinkDetails(this,drinks).execute()
    }

    fun updateDrinks(){
        if (isOnline()){
            refresh.isRefreshing = true
            GetDrinksService(this).getDrinks()
        }else{
            Toast.makeText(this,"Check your internet conection!",Toast.LENGTH_SHORT).show()
        }
    }

    fun updateDrinksDetails(id:Int){
        GetDrinksDetailsService(this).getDetails(id)
    }


    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu_main, menu)

        val searchManager = getSystemService(Context.SEARCH_SERVICE) as SearchManager
        val searchView = menu?.findItem(R.id.search)?.actionView as SearchView
        searchView.setSearchableInfo(searchManager.getSearchableInfo(componentName))
        searchView.setIconifiedByDefault(true)

        searchView.queryHint = "Search Drink"

        searchView.setOnCloseListener {
            searchView.queryHint = "Search Drink"
            false
        }


        searchView.setOnQueryTextListener(object : SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(s: String): Boolean {
                return true
            }

            override fun onQueryTextChange(s: String): Boolean {
                if (s != "")
                    initAndResetRecycler(s)
                else
                    initAndResetRecycler(null)
                return false
            }
        })

        return true
    }

    fun isOnline(): Boolean {
        val cm = this.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
        val activeNetwork = cm.activeNetworkInfo
        return activeNetwork != null && activeNetwork.isConnectedOrConnecting
    }
}
