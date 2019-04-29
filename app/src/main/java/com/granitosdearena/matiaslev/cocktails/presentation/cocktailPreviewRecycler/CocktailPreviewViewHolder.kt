package com.granitosdearena.matiaslev.cocktails.presentation.cocktailPreviewRecycler

import android.content.Context
import android.view.View
import androidx.recyclerview.widget.RecyclerView
import com.bumptech.glide.Glide
import com.bumptech.glide.load.resource.bitmap.CenterCrop
import com.bumptech.glide.load.resource.bitmap.RoundedCorners
import com.granitosdearena.matiaslev.cocktails.R
import com.granitosdearena.matiaslev.cocktails.domain.CocktailPreview
import com.granitosdearena.matiaslev.cocktails.presentation.activities.CocktailActivity
import com.granitosdearena.matiaslev.cocktails.presentation.setSafeOnClickListener
import kotlinx.android.synthetic.main.item_cocktail_preview.view.*

class CocktailPreviewViewHolder(val context: Context, itemView: View): RecyclerView.ViewHolder(itemView) {

    val roundedCorner = context.resources.getDimension(R.dimen.radius_10).toInt()

    fun bindTo(cocktailPreview: CocktailPreview?) = cocktailPreview?.let { cocktailPreview ->
        itemView.drinkName.text = cocktailPreview.drinkName
        Glide.with(context).load(cocktailPreview.drinkThumb)
            .transforms(CenterCrop(), RoundedCorners(roundedCorner))
            .placeholder(R.drawable.ic_drink_placeholder)
            .into(itemView.drinkThumb)
        itemView.setSafeOnClickListener {
            context.startActivity(CocktailActivity.getCocktailActivityIntent(context,
                cocktailPreview.drinkId, cocktailPreview.drinkName))
        }
    }
}