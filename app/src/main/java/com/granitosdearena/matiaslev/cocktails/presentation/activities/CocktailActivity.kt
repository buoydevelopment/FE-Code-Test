package com.granitosdearena.matiaslev.cocktails.presentation.activities

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import com.bumptech.glide.Glide
import com.granitosdearena.matiaslev.cocktails.R
import com.granitosdearena.matiaslev.cocktails.presentation.setSafeOnClickListener
import com.granitosdearena.matiaslev.cocktails.presentation.viewModels.CocktailViewModel
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.CompositeDisposable
import kotlinx.android.synthetic.main.activity_cocktail.*
import org.koin.android.ext.android.get
import org.koin.android.ext.android.inject

class CocktailActivity : AppCompatActivity() {

    val cocktailViewModel by inject<CocktailViewModel>()
    private var disposables = get<CompositeDisposable>()


    companion object {
        val COCKTAIL_ID = "COCKTAIL_ID"
        val COCKTAIL_NAME = "COCKTAIL_NAME"

        fun getCocktailActivityIntent(context: Context, cocktailId: String, cocktailName: String): Intent {
            return Intent(context, CocktailActivity::class.java).apply {
                putExtra(COCKTAIL_ID, cocktailId)
                putExtra(COCKTAIL_NAME, cocktailName)
            }
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cocktail)
        toolbarTittle.text = intent.getStringExtra(COCKTAIL_NAME)
        backArrow.setSafeOnClickListener { onBackPressed() }

        val disposable = cocktailViewModel.getCockailById(intent.getStringExtra(COCKTAIL_ID))
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe {
                Glide.with(this).load(it.drinkThumb)
                    .centerCrop()
                    .placeholder(R.drawable.ic_drink_placeholder)
                    .into(drinkThumb)

                ingredientsWithMeasures.text = it.getIngredientsWithMeasures()
                instructions.text = it.drinkInstructions

                setViewVisibilityAsLoaded()
            }
        disposables.add(disposable)
    }

    private fun setViewVisibilityAsLoaded() {
        progressBar.visibility = View.GONE
        drinkThumb.visibility = View.VISIBLE
        ingredientsWithMeasures.visibility = View.VISIBLE
        howToPrepare.visibility = View.VISIBLE
        instructions.visibility = View.VISIBLE
    }

    override fun onDestroy() {
        super.onDestroy()
        disposables.clear()
    }
}
