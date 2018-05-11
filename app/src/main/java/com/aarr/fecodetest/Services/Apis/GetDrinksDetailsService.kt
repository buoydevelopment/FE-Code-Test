package com.aarr.fecodetest.Services.Apis

import android.content.Context
import android.util.Log
import com.aarr.fecodetest.Services.ApiServices
import com.aarr.fecodetest.Services.Response.GetCocktailDetails.GetCocktailDetails
import com.aarr.fecodetest.Views.MainActivity
import okhttp3.Interceptor
import okhttp3.OkHttpClient
import okhttp3.Response
import org.json.JSONException
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory

/**
 * Created by andresrodriguez on 5/10/18.
 */

class GetDrinksDetailsService(context:Context){

    private var context: Context? = null
    private var service:ApiServices? = null
    private var activity: MainActivity? = null

    init {
        this.context = context
        if (context is MainActivity)
            activity = context
    }

    fun getDetails(id:Int){

        val httpClient = OkHttpClient.Builder().build()

        val retrofit = Retrofit.Builder()
                .baseUrl("http://www.thecocktaildb.com/api/json/v1/1/")
                .client(httpClient)
                .addConverterFactory(GsonConverterFactory.create())
                .build()
        Log.v("Service","Url:"+retrofit.baseUrl().toString())
        service = retrofit.create(ApiServices::class.java)

        try {
            var response: Call<GetCocktailDetails>? = service!!.GetDrinksDetails("lookup.php?i="+id)
            response!!.enqueue(object : Callback<GetCocktailDetails> {
                override fun onResponse(call: Call<GetCocktailDetails>?, response: retrofit2.Response<GetCocktailDetails>?) {
                    Log.v("Service","Success")
                    Log.v("Service","Data:"+response!!.body().toString())
                    if (activity!=null){
                        activity?.saveDrinksDetails(response!!.body())
                    }
                }
                override fun onFailure(call: Call<GetCocktailDetails>?, t: Throwable?) {
                    Log.v("Service","Failed:"+t.toString())
                    if (activity!=null){
                        activity?.saveDrinksDetails(null)
                    }
                }
            })

        } catch (e: JSONException) {
            Log.v("Service","Exception:"+e.toString())
        }
    }
}