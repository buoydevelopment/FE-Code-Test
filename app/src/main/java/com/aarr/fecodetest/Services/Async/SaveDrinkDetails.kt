package com.aarr.fecodetest.Services.Async

import android.content.Context
import android.os.AsyncTask
import com.aarr.fecodetest.Database.Dao.DrinksDetailsDao
import com.aarr.fecodetest.Database.Model.DrinksDetailsModel
import com.aarr.fecodetest.Services.Response.GetCocktailDetails.GetCocktailDetails
import com.aarr.fecodetest.Views.MainActivity

/**
 * Created by andresrodriguez on 5/10/18.
 */
class SaveDrinkDetails(context: Context,drinks: GetCocktailDetails?):AsyncTask<String, Void, String>() {

    var drinks:GetCocktailDetails?=null
    var context:Context?=null
    var activity:MainActivity?=null

    init {
        this.context = context
        this.drinks = drinks
        if (context is MainActivity)
            activity = context
    }

    override fun doInBackground(vararg p0: String?): String {
        if (drinks?.drinks!=null && drinks?.drinks!!.isNotEmpty())
            saveDrinksDetails(drinks)
        return ""
    }

    override fun onPostExecute(result: String?) {
        super.onPostExecute(result)
        activity?.initAndResetRecycler(null)
    }


    fun saveDrinksDetails(drinks:GetCocktailDetails?){
        if (drinks!=null && drinks.drinks?.isNotEmpty()!!){
            for (i in drinks.drinks!!){
                val item = DrinksDetailsDao().findDrinkDetailByServer(i.idDrink)
                if (item==null){
                    var newDrink = DrinksDetailsModel(
                            -1,
                            i.idDrink,
                            i.strDrink,
                            i.strVideo,
                            i.strCategory,
                            i.strIBA,
                            i.strAlcoholic,
                            i.strGlass,
                            i.strInstructions,
                            i.strDrinkThumb,
                            i.strIngredient1,
                            i.strIngredient2,
                            i.strIngredient3,
                            i.strIngredient4,
                            i.strIngredient5,
                            i.strIngredient6,
                            i.strIngredient7,
                            i.strIngredient8,
                            i.strIngredient9,
                            i.strIngredient10,
                            i.strIngredient11,
                            i.strIngredient12,
                            i.strIngredient13,
                            i.strIngredient14,
                            i.strIngredient15,
                            i.strMeasure1,
                            i.strMeasure2,
                            i.strMeasure3,
                            i.strMeasure4,
                            i.strMeasure5,
                            i.strMeasure6,
                            i.strMeasure7,
                            i.strMeasure8,
                            i.strMeasure9,
                            i.strMeasure10,
                            i.strMeasure11,
                            i.strMeasure12,
                            i.strMeasure13,
                            i.strMeasure14,
                            i.strMeasure15,
                            i.dateModified
                    )

                    DrinksDetailsDao().updateOrCreate(newDrink)
                }else{
                    item.strDrink = i.strDrink
                    item.strVideo = i.strVideo
                    item.strCategory = i.strCategory
                    item.strIBA = i.strIBA
                    item.strAlcoholic = i.strAlcoholic
                    item.strGlass = i.strGlass
                    item.strInstructions = i.strInstructions
                    item.strDrinkThumb = i.strDrinkThumb
                    item.strIngredient1 = i.strIngredient1
                    item.strIngredient2 = i.strIngredient2
                    item.strIngredient3 = i.strIngredient3
                    item.strIngredient4 = i.strIngredient4
                    item.strIngredient5 = i.strIngredient5
                    item.strIngredient6 = i.strIngredient6
                    item.strIngredient7 = i.strIngredient7
                    item.strIngredient8 = i.strIngredient8
                    item.strIngredient9 = i.strIngredient9
                    item.strIngredient10 = i.strIngredient10
                    item.strIngredient11 = i.strIngredient11
                    item.strIngredient12 = i.strIngredient12
                    item.strIngredient13 = i.strIngredient13
                    item.strIngredient14 = i.strIngredient14
                    item.strIngredient15 = i.strIngredient15
                    item.strMeasure1 = i.strMeasure1
                    item.strMeasure2 = i.strMeasure2
                    item.strMeasure3 = i.strMeasure3
                    item.strMeasure4 = i.strMeasure4
                    item.strMeasure5 = i.strMeasure5
                    item.strMeasure6 = i.strMeasure6
                    item.strMeasure7 = i.strMeasure7
                    item.strMeasure8 = i.strMeasure8
                    item.strMeasure9 = i.strMeasure9
                    item.strMeasure10 = i.strMeasure10
                    item.strMeasure11 = i.strMeasure11
                    item.strMeasure12 = i.strMeasure12
                    item.strMeasure13 = i.strMeasure13
                    item.strMeasure14 = i.strMeasure14
                    item.strMeasure15 = i.strMeasure15
                    item.dateModified = i.dateModified
                    DrinksDetailsDao().updateOrCreate(item)
                }
            }
        }
    }

}