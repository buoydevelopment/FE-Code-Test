package com.aarr.fecodetest.Services.Apis

import android.content.Context
import android.util.Log
import com.aarr.fecodetest.Services.ApiServices
import com.aarr.fecodetest.Services.Response.GetCocktails.GetCocktails
import com.aarr.fecodetest.Views.MainActivity
import org.json.JSONException
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

/**
 * Created by andresrodriguez on 5/10/18.
 */
class GetDrinksService(context:Context){

    private var service:ApiServices? = null
    private var context: Context? = null
    private var activity: MainActivity? = null

    init {
        this.context = context
        if (context is MainActivity)
            activity = context
    }

    fun getDrinks(){
        val retrofit = Retrofit.Builder()
                .baseUrl("http://www.thecocktaildb.com/api/json/v1/1/")
                .addConverterFactory(GsonConverterFactory.create())
                .build()

        service = retrofit.create(ApiServices::class.java)

        try {

            var response: Call<GetCocktails>? = service!!.GetDrinks()

            response!!.enqueue(object : Callback<GetCocktails> {
                override fun onResponse(call: Call<GetCocktails>?, response: retrofit2.Response<GetCocktails>?) {
                    Log.v("Service","Success")
                    Log.v("Service","Data:"+response!!.body().toString())
                    if (activity!=null){
                        activity?.saveDrinks(response!!.body())
                    }
                }
                override fun onFailure(call: Call<GetCocktails>?, t: Throwable?) {
                    Log.v("Service","Failed:"+t.toString())
                    if (activity!=null){
                        activity?.saveDrinks(null)
                    }
                }
            })

        } catch (e: JSONException) {
            Log.v("Service","Exception:"+e.toString())
        }
    }
}