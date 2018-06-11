package com.kimboo.mvvmkotlin.ui.cocktaildetail

import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import com.kimboo.mvvmkotlin.R
import com.kimboo.mvvmkotlin.model.Cocktail

/**
 * Created by Agustin Tomas Larghi on 31/3/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
class CocktailDetailActivity: AppCompatActivity() {

    //region Constant variables declaration
    companion object {
        val ARG_COCKTAIL_BUNDLE = "arg_cocktail_bundle"

        fun getStartIntent(context: Context, cocktail: Cocktail): Intent {
            val intent = Intent(context, CocktailDetailActivity::class.java)
            intent.putExtra(ARG_COCKTAIL_BUNDLE, cocktail)
            return intent
        }
    }
    //endregion

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        supportPostponeEnterTransition()
        setContentView(R.layout.activity_no_toolbar)

        if (savedInstanceState == null) {

            if (intent.extras.containsKey(ARG_COCKTAIL_BUNDLE)) {
                val userProfile = intent.extras.get(ARG_COCKTAIL_BUNDLE) as Cocktail

                supportFragmentManager.beginTransaction()
                        .replace(R.id.fragmentContainer, CocktailDetailFragment.newInstance(userProfile), CocktailDetailFragment.TAG)
                        .commit()
            }

        }
    }

    override fun onNavigateUp(): Boolean {
        supportFinishAfterTransition()
        return super.onNavigateUp()
    }

    override fun onSupportNavigateUp(): Boolean {
        supportFinishAfterTransition()
        return super.onSupportNavigateUp()
    }

    override fun onBackPressed() {
        supportFinishAfterTransition()
    }

}