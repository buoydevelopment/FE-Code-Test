package com.buoy.codetest.ui.home

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.navigation.Navigation.findNavController
import androidx.navigation.fragment.FragmentNavigatorExtras
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.bumptech.glide.load.resource.bitmap.RoundedCorners
import com.bumptech.glide.request.RequestOptions
import com.buoy.codetest.R
import com.buoy.codetest.model.domain.Drink
import com.buoy.codetest.ui.cocktaildetail.CocktailDetailFragment
import kotlinx.android.synthetic.main.listitem_cocktail.view.*

class CocktailsAdapter: RecyclerView.Adapter<CocktailsAdapter.CocktailItemViewHolder>() {

    private val drinks: MutableList<Drink> = ArrayList()

    fun setDrinks(drinks: List<Drink>) {
        this.drinks.clear()
        this.drinks.addAll(drinks)
        notifyDataSetChanged()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): CocktailItemViewHolder {
        return CocktailItemViewHolder(LayoutInflater.from(parent.context)
            .inflate(R.layout.listitem_cocktail, parent, false))
    }

    override fun getItemCount(): Int = drinks.size

    override fun onBindViewHolder(holder: CocktailItemViewHolder, position: Int) {
        holder.bind(drinks[position])
    }

    inner class CocktailItemViewHolder(itemView: View): RecyclerView.ViewHolder(itemView) {

        fun bind(drink: Drink) = with(itemView) {
            name.text = drink.strDrink

            Glide.with(context)
                .load(drink.strDrinkThumb)
                .placeholder(R.drawable.placeholder)
                .fitCenter()
                .apply(RequestOptions.bitmapTransform(RoundedCorners(16)))
                .into(image)

            setOnClickListener { onDrinkSelected(drink, this) }
        }

        private fun onDrinkSelected(drink: Drink, view: View) {
            val bundle = Bundle()
            bundle.putParcelable(CocktailDetailFragment.EXTRA_DRINK, drink)

            val extras = FragmentNavigatorExtras(
                view.image to "cocktailTransitionName_to"
            )

            findNavController(view).navigate(R.id.action_homeFragment_to_cocktailDetailFragment, bundle, null, extras)
        }
    }

}

