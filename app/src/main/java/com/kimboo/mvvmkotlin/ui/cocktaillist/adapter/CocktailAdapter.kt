package com.kimboo.mvvmkotlin.ui.cocktaillist.adapter

import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.kimboo.mvvmkotlin.R
import com.kimboo.mvvmkotlin.databinding.ViewItemCocktailBinding
import com.kimboo.mvvmkotlin.model.Cocktail
import java.util.*

/**
 * Created by Agustin Tomas Larghi on 7/3/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
class CocktailAdapter(var callback: CocktailAdapter.Callback): RecyclerView.Adapter<CocktailAdapter.MainItemViewHolder>(),
        CocktailItemViewModel.Callback {

    //region Variables declaration
    var cocktailList: List<Cocktail> = ArrayList()
        set(value) {
            field = value
            notifyDataSetChanged()
        }
    //endregion

    //region Adapter's lifecycle methods declaration
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): MainItemViewHolder {
        val itemMainBinding = ViewItemCocktailBinding.inflate(LayoutInflater.from(parent!!.context))
        return MainItemViewHolder(itemMainBinding, this)
    }

    override fun getItemCount(): Int = cocktailList.size

    override fun onBindViewHolder(holder: MainItemViewHolder, position: Int) {
        val cocktail = cocktailList[position]
        if (cocktail != null) {
            holder.onBind(cocktail)
        } else {
            // Null defines queryAlcoholic placeholder item - PagedListAdapter automatically
            // invalidates this row when the actual object is loaded from the
            // database.
            //holder.clear() TODO IMPLEMENT IT
        }
    }
    //endregion

    //region Adapter callback interface declaration

    /**
     * To communicate back to the Fragment/Activity
     */
    interface Callback {
        fun onWholeLayoutClicked(view: View?, cocktail: Cocktail);
    }
    //endregion

    //region CocktailItemViewModel.Callback implementation
    override fun onWholeLayoutClicked(view: View?, cocktail: Cocktail) {
        callback.onWholeLayoutClicked(view?.findViewById(R.id.userProfileListImageView), cocktail)
    }
    //endregion

    //region ViewHolder class declaration
    class MainItemViewHolder(var itemMainBinding: ViewItemCocktailBinding, var callback: CocktailItemViewModel.Callback) :
            RecyclerView.ViewHolder(itemMainBinding.root) {
        fun onBind(cocktail: Cocktail) {
            itemMainBinding.cocktailItemViewModel = CocktailItemViewModel(cocktail, callback)
            itemMainBinding.executePendingBindings()
        }
    }
    //endregion

}
