package com.example.devsar.cocktailapp.home

import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.example.devsar.cocktailapp.R
import com.example.devsar.cocktailapp.home.DrinkAdapter.ViewHolder
import com.example.devsar.cocktailapp.home.model.Drink
import kotlinx.android.synthetic.main.element_drink_list_info.view.*

class DrinkAdapter: RecyclerView.Adapter<ViewHolder>() {

    val TAG = "DrinkAdapter"
    var drinkList = mutableListOf<Drink>()


    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val v = LayoutInflater.from(parent.context).inflate(R.layout.element_drink_list_info, parent, false)
        return ViewHolder(v)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) =
            holder.bindItem(drinkList[position])

    override fun getItemCount() = drinkList.size

    fun loadDrinks(drinkList:MutableList<Drink>){
        this.drinkList = drinkList
        notifyDataSetChanged()
    }

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        fun bindItem(drink: Drink) {
            itemView.drinkName.text = drink.strDrink
            Glide.with(itemView)
                    .applyDefaultRequestOptions(RequestOptions.errorOf(R.drawable.test_drink_image))
                    .load(drink.strDrinkThumb)
                    .into(itemView.drinkImage)
        }
    }

}