package com.aarr.fecodetest.Services.Async

import android.content.Context
import android.os.AsyncTask
import com.aarr.fecodetest.Database.Dao.DrinksDao
import com.aarr.fecodetest.Database.Dao.DrinksDetailsDao
import com.aarr.fecodetest.Database.Model.DrinksDetailsModel
import com.aarr.fecodetest.Database.Model.DrinksModel
import com.aarr.fecodetest.Services.Response.GetCocktailDetails.GetCocktailDetails
import com.aarr.fecodetest.Services.Response.GetCocktails.GetCocktails
import com.aarr.fecodetest.Views.MainActivity
import kotlinx.android.synthetic.main.activity_main.*

/**
 * Created by andresrodriguez on 5/10/18.
 */
class SaveDrinks(context: Context, drinks: GetCocktails?): AsyncTask<String, Void, String>() {

    var drinks: GetCocktails?=null
    var context: Context?=null
    var activity: MainActivity?=null
    private var TASK_DURATION = 3 * 1000

    init {
        this.context = context
        this.drinks = drinks
        if (context is MainActivity)
            activity = context
    }

    override fun doInBackground(vararg p0: String?): String {
        if (drinks?.drinks!=null && drinks?.drinks!!.isNotEmpty())
            saveDrinks(drinks)
        return ""
    }

    override fun onPostExecute(result: String?) {
        super.onPostExecute(result)
        activity?.finishUpdating()
    }

    fun saveDrinks(drinks: GetCocktails?){
        if (drinks!=null && drinks.drinks?.isNotEmpty()!!){
            for (i in drinks.drinks!!){
                val item = DrinksDao().findDrinkByServer(i.idDrink)
                if (item==null){
                    var newDrink = DrinksModel(
                            -1,
                            i.idDrink,
                            i.strDrink,
                            i.strDrinkThumb
                    )

                    DrinksDao().updateOrCreate(newDrink)
                }else{
                    item.strDrink = i.strDrink
                    item.strDrinkThumb = i.strDrinkThumb
                    DrinksDao().updateOrCreate(item)
                }
                activity?.updateDrinksDetails(i.idDrink)

                try {
                    Thread.sleep(TASK_DURATION.toLong())
                } catch (e: InterruptedException) {
                    e.printStackTrace()
                }
            }
        }
    }

}