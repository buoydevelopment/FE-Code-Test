package com.buoy.codetest.ui.home

import android.os.Bundle
import android.view.Menu
import android.view.MenuInflater
import android.view.View
import androidx.appcompat.app.AppCompatActivity
import androidx.appcompat.widget.SearchView
import androidx.appcompat.widget.SearchView.OnQueryTextListener
import androidx.lifecycle.Observer
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.buoy.codetest.R
import com.buoy.codetest.ui.common.BaseFragment
import com.buoy.codetest.ui.common.BaseViewModel
import kotlinx.android.synthetic.main.fragment_home.*
import kotlinx.android.synthetic.main.view_load_helper.*
import org.koin.androidx.viewmodel.ext.android.viewModel


class HomeFragment: BaseFragment() {

    private val model: HomeViewModel by viewModel()
    private val adapter = CocktailsAdapter()

    override fun getLayoutResource(): Int = R.layout.fragment_home

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setHasOptionsMenu(true)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        (activity as AppCompatActivity).setSupportActionBar(toolbar)

        cocktail_list.layoutManager = LinearLayoutManager(context, RecyclerView.VERTICAL, false)
        cocktail_list.adapter = adapter

        error_retry.setOnClickListener { onRetryClicked() }

        model.getDrinks().observe(viewLifecycleOwner, Observer { drinks ->
            adapter.setDrinks(drinks)
        })

        model.getState().observe(viewLifecycleOwner, Observer { state ->
            onStateChanged(state)
        })
    }

    override fun onCreateOptionsMenu(menu: Menu?, inflater: MenuInflater?) {
        super.onCreateOptionsMenu(menu, inflater)
        inflater?.inflate(R.menu.menu_home, menu)
        val menuItem = menu?.findItem(R.id.search)
        (menuItem?.actionView as SearchView).setOnQueryTextListener( onQueryListener )
    }

    private fun onStateChanged(state: BaseViewModel.State?) {

        when(state) {
            BaseViewModel.State.LOADING -> {
                progress.visibility = View.VISIBLE
                error_view.visibility = View.GONE
            }

            BaseViewModel.State.SUCCESS -> {
                progress.visibility = View.GONE
                error_view.visibility = View.GONE
            }

            BaseViewModel.State.ERROR -> {
                progress.visibility = View.GONE
                error_view.visibility = View.VISIBLE
            }
        }
    }


    private val onQueryListener = object: OnQueryTextListener {
        override fun onQueryTextSubmit(query: String?): Boolean {
            return false
        }

        override fun onQueryTextChange(newText: String?): Boolean {
            model.filterList(newText)
            return true
        }

    }

    private fun onRetryClicked() {
        model.requestDrinks()
    }


}