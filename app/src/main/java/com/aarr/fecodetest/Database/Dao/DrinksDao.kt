package com.aarr.fecodetest.Database.Dao

import android.util.Log
import com.aarr.fecodetest.Database.Helper.DatabaseHelper
import com.aarr.fecodetest.Database.Model.DrinksModel
import com.aarr.fecodetest.Services.Response.GetCocktails.Drink

/**
 * Created by andresrodriguez on 5/10/18.
 */
class DrinksDao(){

    private fun insert(item: DrinksModel): Int {
        val dao = DatabaseHelper.helper.getRuntimeExceptionDao(DrinksModel::class.java)
        return dao.create(item)
    }

    private fun update(item: DrinksModel): Int {
        val dao = DatabaseHelper.helper.getRuntimeExceptionDao(DrinksModel::class.java)
        return dao.update(item)
    }

    fun findDrinkByServer(idServer: Int):DrinksModel?{
        var lstFilters:DrinksModel? = null

        val qB = DrinksModel().getRepository().queryBuilder()

        try {
            qB.where().eq("id_server_drink",idServer)
            lstFilters = qB.query()[0]
        } catch (ex: Exception) {
            ex.printStackTrace()
        }
        return lstFilters
    }

    fun findAllDrink(search:String?):List<DrinksModel>?{
        var lstFilters:List<DrinksModel>? = null

        val qB = DrinksModel().getRepository().queryBuilder()
        val w = qB.where()

        try {
            lstFilters = if (!search.isNullOrEmpty()){
                w.or(
                        w.eq("drink_name",search),
                        w.like("drink_name","%"+search+"%"))
                qB.query()
            }else{
                DrinksModel().getRepository().queryForAll()
            }
        } catch (ex: Exception) {
            ex.printStackTrace()
        }
        return lstFilters
    }

    fun updateOrCreate(item: DrinksModel?):Int{
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