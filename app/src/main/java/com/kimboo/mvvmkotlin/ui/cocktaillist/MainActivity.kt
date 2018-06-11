package com.kimboo.mvvmkotlin.ui.cocktaillist

import android.os.Bundle
import android.support.v4.app.ActivityOptionsCompat
import android.support.v4.util.Pair
import android.support.v7.app.AppCompatActivity
import android.view.Menu
import android.view.View
import com.kimboo.mvvmkotlin.R
import com.kimboo.mvvmkotlin.model.Cocktail
import com.kimboo.mvvmkotlin.ui.cocktaildetail.CocktailDetailActivity
import com.kimboo.mvvmkotlin.ui.cocktaildetail.CocktailDetailFragment
import com.miguelcatalan.materialsearchview.MaterialSearchView
import kotlinx.android.synthetic.main.activity_master_detail.*
import kotlinx.android.synthetic.main.toolbar_main.*

/**
 * Just acting as queryAlcoholic fragment holder of the {@link CocktailListFragment}
 */
class MainActivity : AppCompatActivity(), MainActivityCallback, MaterialSearchView.OnQueryTextListener {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_master_detail)

        // I don't like using toolbars in the Activities but in order to get the master/detail
        // working properly I had to put it here
        setSupportActionBar(cocktailListToolbar)
        supportActionBar?.setDisplayHomeAsUpEnabled(true)
        supportActionBar?.setHomeButtonEnabled(true)

        cocktailListSearchView.setVoiceSearch(true)

        cocktailListSearchView.setOnQueryTextListener(this)

        if (savedInstanceState == null) {
            supportFragmentManager.beginTransaction()
                    .replace(R.id.fragmentMasterContainer, CocktailListFragment.newInstance(), CocktailListFragment.TAG)
                    .commit()
        }
    }

    override fun onQueryTextSubmit(query: String?): Boolean {
        val cocktailListFragment = supportFragmentManager.findFragmentByTag(CocktailListFragment.TAG)
                as CocktailListFragment
        cocktailListFragment?.searchDrink(query)
        return false
    }

    override fun onQueryTextChange(newText: String?): Boolean {
        return false
    }

    override fun onCreateOptionsMenu(menu: Menu?): Boolean {
        menuInflater.inflate(R.menu.menu, menu)
        menu?.findItem(R.id.action_search)?.let {
            cocktailListSearchView.setMenuItem(it)
        }
        return true
    }

    override fun onCocktailClicked(view: View?, cocktail: Cocktail) {
        if (fragmentDetailContainer != null) {
            // The detail container view will be present only in the
            // large-screen layouts (res/values-w900dp).
            // If this view is present, then the
            // activity should be in two-pane mode.
            supportFragmentManager.beginTransaction()
                    .addSharedElement(view, cocktail.id)
                    .replace(R.id.fragmentDetailContainer, CocktailDetailFragment.newInstance(cocktail), CocktailDetailFragment.TAG)
                    .commit()
        } else {
            // Animate transition
            val activityOptions = ActivityOptionsCompat.makeSceneTransitionAnimation(this,
                    Pair(view, cocktail.id))
            startActivity(CocktailDetailActivity.getStartIntent(this, cocktail),
                    activityOptions.toBundle())
        }
    }
}
