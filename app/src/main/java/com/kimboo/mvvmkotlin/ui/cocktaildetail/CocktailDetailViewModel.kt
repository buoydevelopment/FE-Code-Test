package com.kimboo.mvvmkotlin.ui.cocktaildetail

import android.arch.lifecycle.ViewModel
import android.content.Context
import android.databinding.BindingAdapter
import android.databinding.ObservableField
import android.support.design.widget.Snackbar
import android.view.View
import android.widget.ImageView
import com.bumptech.glide.Glide
import com.kimboo.mvvmkotlin.extensions.DataSourceSubscriber
import com.kimboo.mvvmkotlin.extensions.subscribe
import com.kimboo.mvvmkotlin.model.Cocktail
import com.kimboo.mvvmkotlin.retrofit.repositories.CocktailRepository
import javax.inject.Inject

/**
 * Created by Agustin Tomas Larghi on 5/3/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
//If you need queryAlcoholic context aware ViewModel you should use AndroidViewModel
class CocktailDetailViewModel @Inject constructor (val context: Context,
                                                   val cocktailRepository: CocktailRepository): ViewModel() {

    //Notice that the variables are read-only, but not their properties
    var cocktailDetail = ObservableField<Cocktail>()
    val snackBarMessage = ObservableField<String>()

    fun setCocktail(cocktail: Cocktail) {
        //Hook the ObservableField to the DB changes
        cocktailRepository.getCocktail(cocktail.id)?.subscribe {
            cocktailDetail.set(it)
            cocktailDetail.notifyChange()
        }

        //Query the API just in case that this data is deprecated
        cocktailRepository.fetchCocktail(cocktail.id)
            .subscribe(object: DataSourceSubscriber<Cocktail>() {
                override fun onError(t: Throwable?) {
                    snackBarMessage.set(t?.localizedMessage)
                    snackBarMessage.notifyChange()
                }
            });
    }

    companion object {
        @JvmStatic @BindingAdapter(value = "app:imageUrl", requireAll = true)
        fun loadImage(view: ImageView, imageUrl: String?) {
            imageUrl?.let {
                Glide.with(view.context).load(imageUrl).into(view);
            }
        }

        @JvmStatic @BindingAdapter(value = "app:showSnackbar", requireAll = true)
        fun bindSnackBar(view: View, showSnackbar: String?) {
            showSnackbar?.let {
                Snackbar.make(view, showSnackbar, Snackbar.LENGTH_LONG).show();
            }
        }
    }
}