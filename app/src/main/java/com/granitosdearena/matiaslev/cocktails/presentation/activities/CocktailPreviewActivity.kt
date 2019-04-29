package com.granitosdearena.matiaslev.cocktails.presentation.activities

import android.os.Bundle
import android.view.KeyEvent
import android.view.WindowManager
import androidx.appcompat.app.AppCompatActivity
import androidx.core.widget.addTextChangedListener
import androidx.recyclerview.widget.LinearLayoutManager
import com.granitosdearena.matiaslev.cocktails.R
import com.granitosdearena.matiaslev.cocktails.presentation.cocktailPreviewRecycler.CocktailPreviewAdapter
import com.granitosdearena.matiaslev.cocktails.presentation.viewModels.CocktailPreviewViewModel
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.CompositeDisposable
import kotlinx.android.synthetic.main.activity_cocktail_preview.*
import org.koin.android.ext.android.get
import org.koin.android.ext.android.inject

class CocktailPreviewActivity : AppCompatActivity() {

    private val cocktailPreviewAdapter by inject<CocktailPreviewAdapter>()
    private val cocktailPreviewViewModel by inject<CocktailPreviewViewModel>()
    private var disposables = get<CompositeDisposable>()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cocktail_preview)
        supportActionBar?.title = resources.getString(R.string.drinks_by_mati_lev)

        getAllCocktailsPreview()

        search.addTextChangedListener {
            it?.let {
                if (it.isEmpty()) {
                    getAllCocktailsPreview()
                } else {
                    searchCocktailsPreviewByName(it.toString())
                }
            }
        }
    }

    private fun searchCocktailsPreviewByName(name: String) {
        val disposable = cocktailPreviewViewModel.searchCocktailsPreviewByName(name)
            .subscribe {
                cocktailPreviewRecycler.adapter = cocktailPreviewAdapter
                cocktailPreviewRecycler.layoutManager = LinearLayoutManager(this)
                cocktailPreviewAdapter.submitList(it)
            }
        disposables.add(disposable)
    }

    private fun getAllCocktailsPreview() {
        val disposable = cocktailPreviewViewModel.getCockailsPreview()
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe {
                cocktailPreviewRecycler.adapter = cocktailPreviewAdapter
                cocktailPreviewRecycler.layoutManager = LinearLayoutManager(this)
                cocktailPreviewAdapter.submitList(it)
            }
        disposables.add(disposable)
    }

    override fun onDestroy() {
        super.onDestroy()
        disposables.clear()
    }
}
