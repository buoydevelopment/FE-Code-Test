package com.aarr.fecodetest.Adapters

import android.content.Context
import android.graphics.Color
import android.support.constraint.ConstraintLayout
import android.support.v7.widget.RecyclerView
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import com.aarr.fecodetest.Database.Dao.DrinksDetailsDao
import com.aarr.fecodetest.Database.Model.DrinksModel
import com.aarr.fecodetest.R
import com.aarr.fecodetest.Views.MainActivity
import com.bumptech.glide.Glide

/**
 * Created by andresrodriguez on 5/10/18.
 */
class DrinksAdapter(context: Context, items: List<DrinksModel>): RecyclerView.Adapter<DrinksAdapter.DrinksViewHolder>(){

    var drinks: List<DrinksModel>? = null
        get() {
            if (field == null) {
                this.drinks = ArrayList<DrinksModel>()
            }
            return field
        }
    var adapterContext: Context?=null
    var activity: MainActivity?=null

    class DrinksViewHolder(v: View) : RecyclerView.ViewHolder(v) {

        var imgDrink: ImageView? = null
        var txtDrinkName: TextView? = null
        var txtDrinkIngredients: TextView? = null
        var baseLayout: ConstraintLayout? = null

        init {
            imgDrink = v.findViewById(R.id.imgDrink)
            txtDrinkName = v.findViewById(R.id.txtDrinkName)
            txtDrinkIngredients = v.findViewById(R.id.txtDrinkIngredients)
            baseLayout = v.findViewById(R.id.baseLayout)
        }
    }

    init {
        Log.v("BlacklistSize", items.size.toString())
        drinks = items
        adapterContext = context
        if (adapterContext is MainActivity)
            activity = adapterContext as MainActivity
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): DrinksAdapter.DrinksViewHolder {
        val v = LayoutInflater.from(parent.context)
                .inflate(R.layout.drink_item, parent, false)
        return DrinksViewHolder(v)
    }

    override fun onBindViewHolder(holder: DrinksAdapter.DrinksViewHolder, position: Int) {
        if (drinks?.isNotEmpty()!!) {
            val item = drinks!![position]

            holder.txtDrinkName?.setText(item.strDrink)

            val details = DrinksDetailsDao().findDrinkDetailByServer(item.idServerDrink)
            holder.txtDrinkIngredients?.setText("")
            if (details!=null){
                Log.v("DrinkDetails",details.toString())
                val ingredients = DrinksDetailsDao().getListIngredients(details)
                if (ingredients.isNotEmpty()){
                    if (ingredients.size>2){
                        val restIngredients = ingredients.size - 2
                        val txtIngredients = "•"+ingredients[0]+"\n•"+ingredients[1]+"\nand "+restIngredients+" ingredients more"
                        holder.txtDrinkIngredients?.setText(txtIngredients)
                    }else{
                        val txtIngredients = "•"+ingredients[0]+"\n•"+ingredients[1]
                        holder.txtDrinkIngredients?.setText(txtIngredients)
                    }
                }else{
                    Log.e("DrinkDetails","Ingredients are empty")
                }
            }else{
                Log.e("DrinkDetails","Details is null")
            }


            Glide
                    .with(adapterContext!!)
                    .load(item.strDrinkThumb)
                    .into(holder.imgDrink!!)

            holder.baseLayout?.setOnClickListener {
                if (activity!=null){
                    activity?.goDrinkDetails(item.idServerDrink)
                }
            }
        }
    }

    override fun getItemCount(): Int {
        return drinks!!.size
    }

}