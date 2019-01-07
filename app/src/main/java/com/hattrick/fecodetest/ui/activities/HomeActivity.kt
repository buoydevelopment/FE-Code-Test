package com.hattrick.fecodetest.ui.activities

import android.os.Bundle
import android.view.View
import com.github.ybq.android.spinkit.style.DoubleBounce
import com.hattrick.fecodetest.R
import com.hattrick.fecodetest.model.CocktailWrapper
import com.hattrick.fecodetest.ui.fragments.CocktailDetailsFragment
import com.hattrick.fecodetest.ui.fragments.CocktailsListFragment
import kotlinx.android.synthetic.main.activity_home.*


class HomeActivity : BaseActivity(), CocktailsListFragment.OnFragmentInteractionListener,
    CocktailDetailsFragment.OnFragmentInteractionListener {

    //region Life Cycle
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_home)

        setupLoader()

        if (savedInstanceState == null) {
            val mainFragment = CocktailsListFragment()
            val ft = supportFragmentManager.beginTransaction()
            ft.add(R.id.flMainContainer, mainFragment).commit()
        }
    }
    //endregion


    //region Private methods
    private fun setupLoader() {
        val doubleBounce = DoubleBounce()
        loader.setIndeterminateDrawable(doubleBounce)
    }
    //endregion

    //region Cocktails List Interface
    override fun cocktailSelected(cocktail: CocktailWrapper) {
        val detailsFragment = CocktailDetailsFragment.newInstance(cocktail.id)
        val ft = supportFragmentManager.beginTransaction()
        ft.addToBackStack(null)
        ft.replace(R.id.flMainContainer, detailsFragment).commit()
    }
    //endregion

    //region Cocktails List Interface
    override fun backPressed() {
        supportFragmentManager.popBackStack()
    }
    //endregion

}
