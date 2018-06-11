package com.kimboo.mvvmkotlin.ui.cocktaillist

import android.arch.lifecycle.Observer
import android.arch.lifecycle.ViewModelProviders
import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v7.widget.GridLayoutManager
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.kimboo.mvvmkotlin.MyApp
import com.kimboo.mvvmkotlin.R
import com.kimboo.mvvmkotlin.databinding.FragmentCocktailListBinding
import com.kimboo.mvvmkotlin.di.modules.MyViewModelFactory
import com.kimboo.mvvmkotlin.model.Cocktail
import com.kimboo.mvvmkotlin.ui.cocktaillist.adapter.CocktailAdapter
import kotlinx.android.synthetic.main.fragment_cocktail_list.*
import javax.inject.Inject

/**
 * Created by Agustin Tomas Larghi on 3/3/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
class CocktailListFragment: Fragment(), CocktailAdapter.Callback {

    //region Constant variables declaration
    companion object {
        var TAG: String = CocktailListFragment.javaClass.simpleName

        fun newInstance(): CocktailListFragment {
            val fragment = CocktailListFragment()
            fragment.arguments = Bundle()
            return fragment
        }
    }
    //endregion

    //region Variables declaration
    @Inject
    lateinit var viewModelFactory: MyViewModelFactory

    private lateinit var fragmentUserProfileListBinding: FragmentCocktailListBinding //Generated automatically
    private lateinit var cocktailListViewModel: CocktailListViewModel

    private val cocktailAdapter = CocktailAdapter(this)
    //endregion

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater!!.inflate(R.layout.fragment_cocktail_list, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        MyApp.viewInjector.inject(this)

        fragmentUserProfileListBinding = FragmentCocktailListBinding.bind(view)
        cocktailListViewModel = ViewModelProviders.of(this, viewModelFactory).get(CocktailListViewModel::class.java)
        fragmentUserProfileListBinding.cocktailListViewModel = cocktailListViewModel

        cocktailListRecyclerView.layoutManager = GridLayoutManager(context, 2)
        cocktailListRecyclerView.adapter = cocktailAdapter
        cocktailListRecyclerView.setHasFixedSize(true)

        //Here we are listening for Room's flowable changes
        cocktailListViewModel.buildCocktailListLiveData().observe(this, Observer {
            cocktailList -> cocktailList?.let { cocktailAdapter.cocktailList = it}
        })

        cocktailListViewModel.fetchCocktails()
    }
    //endregion

    //region CocktailAdapter.Callback implementation
    override fun onWholeLayoutClicked(view: View?, cocktail: Cocktail) {
        if (activity is MainActivityCallback) {
            with (activity as MainActivityCallback) {
                onCocktailClicked(view, cocktail)
            }
        }
    }

    fun searchDrink(query: String?) {
        query?.let {
            cocktailListViewModel.searchDrink(query)
        }
    }
    //endregion
}