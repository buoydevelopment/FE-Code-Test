package com.aarr.fecodetest.Views

import android.support.v7.app.AppCompatActivity
import android.os.Bundle
import android.util.Log
import com.aarr.fecodetest.Database.Dao.DrinksDetailsDao
import com.aarr.fecodetest.Database.Model.DrinksDetailsModel
import com.aarr.fecodetest.R
import com.bumptech.glide.Glide
import kotlinx.android.synthetic.main.activity_drinks_details.*

class DrinksDetailsActivity : AppCompatActivity() {

    private var idDrink = -1
    private var drinkDetails: DrinksDetailsModel? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_drinks_details)

        setSupportActionBar(toolbarMain)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setDisplayShowHomeEnabled(true)
        supportActionBar?.setDisplayShowTitleEnabled(false);

        val intent = intent
        if (intent.hasExtra("idDrink"))
            idDrink = intent.getIntExtra("idDrink",-1)

        if (idDrink>0){
            drinkDetails = DrinksDetailsDao().findDrinkDetailByServer(idDrink)
        }

        if (drinkDetails!=null){
            toolbar_title?.setText(drinkDetails?.strDrink)
            Glide
                    .with(this)
                    .load(drinkDetails?.strDrinkThumb)
                    .into(imgDrink!!)

            val ingredients = DrinksDetailsDao().getListIngredients(drinkDetails!!)
            val measures = DrinksDetailsDao().getListMeasures(drinkDetails!!)

            try{
                val size = ingredients.size
                var value = ""
                for (i in 0..(size-1)){
                    value += if (i==(size-1)){
                        measures[i]+"-"+ingredients[i]
                    }else{
                        measures[i]+"-"+ingredients[i]+"\n"
                    }
                }
                txtIngredients.setText(value)
            }catch (e:Exception){
                Log.e("DrinkDetails",e.toString())
            }

            var howTo = "•How to prepare\n"+drinkDetails?.strInstructions
            txtHowTo.setText(howTo)
        }

    }
}
