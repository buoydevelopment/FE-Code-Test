package com.example.kotlin.mycoctail.activities

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.View
import android.widget.Button
import android.widget.ImageView
import android.widget.LinearLayout

import android.widget.TextView

import com.example.kotlin.mycoctail.asyncTasks.AsyncTaskIndividualCoctail

import com.example.kotlin.mycoctail.R

import com.example.kotlin.mycoctail.models.CoctailInformation
import com.example.kotlin.mycoctail.models.CoctailSerializer
import com.google.gson.Gson
import com.squareup.picasso.Picasso

class CoctailDataActivity : AppCompatActivity() {

    internal var coctailName: String =""
    internal var coctailId = ""
    internal var ll_error: LinearLayout ? = null
    internal var ll_coctail_data: LinearLayout ? = null
    internal var bt_fetchData : Button ?= null


    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_coctail_data)
        chargeView()
    }


    override fun onResume() {
        super.onResume()

        val myIntent = intent
        coctailId = myIntent.getStringExtra("coctailId")
        coctailName = myIntent.getStringExtra("coctailName")
        fetchCoctailData(coctailId)
    }


    fun chargeView() {
        ll_coctail_data = findViewById(R.id.layout_coctail_data)
        ll_error = findViewById(R.id.layout_coctail_error)
        bt_fetchData = findViewById(R.id.coctail_button_tryAgain)
        bt_fetchData!!.setOnClickListener(View.OnClickListener { fetchCoctailData(coctailId) })
    }

    fun fetchCoctailData(coctailId: String) {
        try {
            val coctailReturnedData = AsyncTaskIndividualCoctail().execute(coctailId).get()

            if (coctailReturnedData != null) {

                if (!ll_coctail_data!!.isShown) {
                    showViewData()
                }

                val gson = Gson()
                val coctail = gson.fromJson(coctailReturnedData, CoctailSerializer::class.java)
                chargeViewData(coctail.drinks[0])
            } else {
                showViewError()
            }

        } catch (e: Exception) {
            showViewError()
        }

    }

    private fun chargeViewData(coctail: CoctailInformation) {

        val tv_ingredients = findViewById<View>(R.id.textView_coctailData_ingredients) as TextView
        val tv_steps = findViewById<View>(R.id.textView_coctailData_steps) as TextView
        val tv_coctailData_name = findViewById<View>(R.id.textView_coctailData_name) as TextView
        val iv_imageView_coctailPreview = findViewById<View>(R.id.imageView_coctailPreview) as ImageView

        tv_coctailData_name.text = coctailName

        var ingredients = ""
        for (i in 1..15) {
            val ingredient = if (coctail.getIngredient(i) === "" || coctail.getIngredient(i) == null) "" else coctail.getIngredient(i)
            val measure = if (coctail.getMeasure(i) === "" || coctail.getMeasure(i) == null) "" else coctail.getMeasure(i)
            val measureIngredient = if (measure !== "" && ingredient !== "") measure + " - " + ingredient else ""

            ingredients = if (measureIngredient !== "") ingredients + '\n'.toString() + measureIngredient else ingredients
        }
        tv_ingredients.text = ingredients
        tv_steps.text = coctail.strInstructions

        Picasso.with(this).load( coctail.strDrinkThumb).error( R.drawable.cocktail_error ).fit().placeholder( R.drawable.loading ).into( iv_imageView_coctailPreview);

    }


    fun showViewError() {
        ll_coctail_data!!.visibility = View.GONE
        ll_error!!.visibility = View.VISIBLE
    }

    fun showViewData() {
        ll_coctail_data!!.visibility = View.VISIBLE
        ll_error!!.visibility = View.GONE
    }



}//class
