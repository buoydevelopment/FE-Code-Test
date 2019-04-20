package com.buoy.codetest.ui.cocktaildetail

import android.os.Bundle
import android.transition.TransitionInflater
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.Observer
import androidx.transition.ChangeBounds
import com.bumptech.glide.Glide
import com.bumptech.glide.load.resource.bitmap.RoundedCorners
import com.bumptech.glide.request.RequestOptions
import com.buoy.codetest.R
import com.buoy.codetest.model.domain.Drink
import com.buoy.codetest.system.extentions.getThroughReflection
import com.buoy.codetest.system.extentions.notEmptyStrings
import com.buoy.codetest.ui.common.BaseFragment
import kotlinx.android.synthetic.main.fragment_cocktail_detail.*
import org.koin.androidx.viewmodel.ext.android.viewModel

class CocktailDetailFragment: BaseFragment() {

    val model: CocktailDetailViewModel by viewModel()

    override fun getLayoutResource(): Int = R.layout.fragment_cocktail_detail

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setHasOptionsMenu(true)
    }

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        sharedElementEnterTransition = TransitionInflater.from(context).inflateTransition(android.R.transition.move)
        return super.onCreateView(inflater, container, savedInstanceState)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        (activity as AppCompatActivity).setSupportActionBar(toolbar)

        arguments?.let { args ->
            if (args.containsKey(EXTRA_DRINK)) {
                val drink: Drink = args.getParcelable(EXTRA_DRINK)
                model.initialize(drink)
                setCocktailImage(drink.strDrinkThumb)
            }
        }

        model.getDrink().observe(viewLifecycleOwner, Observer { drink -> onDrinkUpdate(drink) })
    }

    private fun setCocktailImage(strDrinkThumb: String?) {
        Glide.with(this)
            .load(strDrinkThumb)
            .fitCenter()
            .placeholder(R.drawable.placeholder)
            .apply(RequestOptions.bitmapTransform(RoundedCorners(16)))
            .into(image)
    }

    private fun onDrinkUpdate(drink: Drink?) {
        drink?.let { drink ->
            setToolbarTitle(drink.strDrink, true)
            setCocktailImage(drink.strDrinkThumb)

            ingredients.text = getIngredients(drink)
            instructions.text = drink.strInstructions?.let { it }
        }
    }

    private fun getIngredients(drink: Drink): String {
        var ingredients = ""

        for (i in 1..15) {
            val ingredient = drink.getThroughReflection<String>("strIngredient$i")
            val measure = drink.getThroughReflection<String>("strMeasure$i")

            notEmptyStrings(ingredient, measure) { ingredient, measure ->
                ingredients += "$ingredient $measure \n"
            }

        }

        return ingredients
    }

    companion object {
        const val EXTRA_DRINK = "extra_drink"
    }
}