package com.granitosdearena.matiaslev.cocktails.presentation.cocktailPreviewRecycler

import android.view.LayoutInflater
import android.view.ViewGroup
import androidx.paging.PagedListAdapter
import androidx.recyclerview.widget.DiffUtil
import com.granitosdearena.matiaslev.cocktails.R
import com.granitosdearena.matiaslev.cocktails.domain.CocktailPreview

class CocktailPreviewAdapter: PagedListAdapter<CocktailPreview, CocktailPreviewViewHolder>(DIFF_CALLBACK) {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int) = CocktailPreviewViewHolder(
        parent.context,
        LayoutInflater.from(parent.context)
            .inflate(R.layout.item_cocktail_preview, parent, false)
    )

    override fun onBindViewHolder(holder: CocktailPreviewViewHolder, position: Int) {
        holder.bindTo(cocktailPreview = getItem(position))
    }

    companion object {
        private val DIFF_CALLBACK = object :
            DiffUtil.ItemCallback<CocktailPreview>() {
            // CocktailPreview details may have changed if reloaded from the database,
            // but ID is fixed.
            override fun areItemsTheSame(oldCocktailPreview: CocktailPreview,
                                         newCocktailPreview: CocktailPreview) =
                oldCocktailPreview.drinkId == newCocktailPreview.drinkId

            override fun areContentsTheSame(oldCocktailPreview: CocktailPreview,
                                            newCocktailPreview: CocktailPreview) =
                oldCocktailPreview == newCocktailPreview
        }
    }

}