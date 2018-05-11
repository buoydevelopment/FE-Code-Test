package com.aarr.fecodetest.Database.Dao

import android.util.Log
import com.aarr.fecodetest.Database.Helper.DatabaseHelper
import com.aarr.fecodetest.Database.Model.DrinksDetailsModel
import com.aarr.fecodetest.Database.Model.DrinksModel

/**
 * Created by andresrodriguez on 5/10/18.
 */
class DrinksDetailsDao(){
    private fun insert(item: DrinksDetailsModel): Int {
        val dao = DatabaseHelper.helper.getRuntimeExceptionDao(DrinksDetailsModel::class.java)
        return dao.create(item)
    }

    private fun update(item: DrinksDetailsModel): Int {
        val dao = DatabaseHelper.helper.getRuntimeExceptionDao(DrinksDetailsModel::class.java)
        return dao.update(item)
    }

    fun findDrinkDetailByServer(idServer: Int): DrinksDetailsModel?{
        var lstFilters: DrinksDetailsModel? = null

        val qB = DrinksDetailsModel().getRepository().queryBuilder()

        try {
            qB.where().eq("id_server_drink_detail",idServer)
            lstFilters = qB.query()[0]
        } catch (ex: Exception) {
            ex.printStackTrace()
        }
        return lstFilters
    }

    fun findAllDrinkDetails():List<DrinksDetailsModel>?{
        var lstFilters:List<DrinksDetailsModel>? = null

        val qB = DrinksDetailsModel().getRepository().queryBuilder()

        try {
            lstFilters = qB.query()
        } catch (ex: Exception) {
            ex.printStackTrace()
        }
        return lstFilters
    }

    fun getListIngredients(item:DrinksDetailsModel):MutableList<String>{
        val ingredients: MutableList<String> = ArrayList<String>()
        if (item!=null){
            if (!item.strIngredient1.isNullOrEmpty())
                ingredients.add(item.strIngredient1!!)
            if (!item.strIngredient2.isNullOrEmpty())
                ingredients.add(item.strIngredient2!!)
            if (!item.strIngredient3.isNullOrEmpty())
                ingredients.add(item.strIngredient3!!)
            if (!item.strIngredient4.isNullOrEmpty())
                ingredients.add(item.strIngredient4!!)
            if (!item.strIngredient5.isNullOrEmpty())
                ingredients.add(item.strIngredient5!!)
            if (!item.strIngredient6.isNullOrEmpty())
                ingredients.add(item.strIngredient6!!)
            if (!item.strIngredient7.isNullOrEmpty())
                ingredients.add(item.strIngredient7!!)
            if (!item.strIngredient8.isNullOrEmpty())
                ingredients.add(item.strIngredient8!!)
            if (!item.strIngredient9.isNullOrEmpty())
                ingredients.add(item.strIngredient9!!)
            if (!item.strIngredient10.isNullOrEmpty())
                ingredients.add(item.strIngredient10!!)
            if (!item.strIngredient11.isNullOrEmpty())
                ingredients.add(item.strIngredient11!!)
            if (!item.strIngredient12.isNullOrEmpty())
                ingredients.add(item.strIngredient12!!)
            if (!item.strIngredient13.isNullOrEmpty())
                ingredients.add(item.strIngredient13!!)
            if (!item.strIngredient14.isNullOrEmpty())
                ingredients.add(item.strIngredient14!!)
            if (!item.strIngredient14.isNullOrEmpty())
                ingredients.add(item.strIngredient14!!)
        }
        return ingredients
    }

    fun getListMeasures(item:DrinksDetailsModel):MutableList<String>{
        val measures: MutableList<String> = ArrayList<String>()
        if (item!=null){
            if (!item.strMeasure1.isNullOrEmpty())
                measures.add(item.strMeasure1!!)
            if (!item.strMeasure2.isNullOrEmpty())
                measures.add(item.strMeasure2!!)
            if (!item.strMeasure3.isNullOrEmpty())
                measures.add(item.strMeasure3!!)
            if (!item.strMeasure4.isNullOrEmpty())
                measures.add(item.strMeasure4!!)
            if (!item.strMeasure5.isNullOrEmpty())
                measures.add(item.strMeasure5!!)
            if (!item.strMeasure6.isNullOrEmpty())
                measures.add(item.strMeasure6!!)
            if (!item.strMeasure7.isNullOrEmpty())
                measures.add(item.strMeasure7!!)
            if (!item.strMeasure8.isNullOrEmpty())
                measures.add(item.strMeasure8!!)
            if (!item.strMeasure9.isNullOrEmpty())
                measures.add(item.strMeasure9!!)
            if (!item.strMeasure10.isNullOrEmpty())
                measures.add(item.strMeasure10!!)
            if (!item.strMeasure11.isNullOrEmpty())
                measures.add(item.strMeasure11!!)
            if (!item.strMeasure12.isNullOrEmpty())
                measures.add(item.strMeasure12!!)
            if (!item.strMeasure13.isNullOrEmpty())
                measures.add(item.strMeasure13!!)
            if (!item.strMeasure14.isNullOrEmpty())
                measures.add(item.strMeasure14!!)
            if (!item.strMeasure14.isNullOrEmpty())
                measures.add(item.strMeasure14!!)
        }
        return measures
    }

    fun updateOrCreate(item: DrinksDetailsModel?):Int{
        var i = -1
        if (item!!.idMobileDrink>0){
            i = update(item)
            if (i==1)
                i = item!!.idMobileDrink
            Log.v("UpdateCreate","Updated id: "+i)
        }else{
            insert(item)
            i = item.idMobileDrink
            Log.v("UpdateCreate","Insert id: "+i)
        }
        return i
    }
}