package com.hattrick.fecodetest.ui.fragments

import android.content.Context
import android.graphics.Bitmap
import android.os.Bundle
import android.view.LayoutInflater
import android.view.MenuItem
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.bumptech.glide.Glide
import com.bumptech.glide.load.MultiTransformation
import com.bumptech.glide.load.resource.bitmap.CenterCrop
import com.bumptech.glide.request.RequestOptions
import com.hattrick.fecodetest.R
import com.hattrick.fecodetest.common.extensions.disposedBy
import com.hattrick.fecodetest.model.Cocktail
import com.hattrick.fecodetest.ui.activities.BaseActivity
import com.hattrick.fecodetest.ui.viewmodels.CocktailDetailsViewModel
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.CompositeDisposable
import jp.wasabeef.glide.transformations.RoundedCornersTransformation
import kotlinx.android.synthetic.main.fragment_cocktail_details.*

private const val ARG_COCKTAIL_ID = "arg_cocktail_id"

class CocktailDetailsFragment : Fragment() {

    //region Variables
    private var cocktailId: String? = null
    private var listener: OnFragmentInteractionListener? = null
    private lateinit var viewModel: CocktailDetailsViewModel
    private val disposables = CompositeDisposable()
    //endregion

    //region Life Cycle
    companion object {
        @JvmStatic
        fun newInstance(cocktailId: String) =
            CocktailDetailsFragment().apply {
                arguments = Bundle().apply {
                    putString(ARG_COCKTAIL_ID, cocktailId)
                }
            }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        arguments?.let {
            cocktailId = it.getString(ARG_COCKTAIL_ID)
        }
    }

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_cocktail_details, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        setupToolbar()
        setupBindings()

        cocktailId?.let {
            viewModel.tryFetchCocktailDetails.onNext(it)
        }
    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        return when (item?.itemId) {
            android.R.id.home -> {
                listener?.backPressed()
                true
            }
            else -> super.onOptionsItemSelected(item)
        }
    }

    override fun onAttach(context: Context) {
        super.onAttach(context)

        if (context is OnFragmentInteractionListener) {
            listener = context
        } else {
            throw RuntimeException(context.toString() + " must implement OnFragmentInteractionListener")
        }
    }

    override fun onDetach() {
        super.onDetach()

        listener = null
    }
    //endregion

    //region Private methods
    private fun setupToolbar() {
        setHasOptionsMenu(true)
        (activity as? AppCompatActivity)?.supportActionBar?.setDisplayHomeAsUpEnabled(true)
        (activity as? AppCompatActivity)?.supportActionBar?.setDisplayShowHomeEnabled(true)
    }

    private fun setupUI(cocktail: Cocktail) {
        val multiTransformation = MultiTransformation<Bitmap>(
            CenterCrop(),
            RoundedCornersTransformation(4, 0, RoundedCornersTransformation.CornerType.ALL)
        )
        Glide.with(this)
            .load(cocktail.thumb)
            .apply(RequestOptions.bitmapTransform(multiTransformation))
            .into(ivThumb)
        tvCocktailIngredients.text = buildIngredients(cocktail)
        tvCocktailInstructions.text = cocktail.instructions
        tvCocktailInstructionsTitle.text = getString(R.string.fragment_cocktail_details_instructions_title)
    }

    private fun setupBindings() {
        viewModel = CocktailDetailsViewModel()

        viewModel.cocktail
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe {
                setupUI(it)
            }.disposedBy(disposables)

        viewModel.loader
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe { show ->
                if(show) {
                    (activity as? BaseActivity)?.showLoader()
                } else {
                    (activity as? BaseActivity)?.hideLoader()
                }
            }.disposedBy(disposables)
    }

    private fun buildIngredients(cocktail: Cocktail): String {
        var measureAndIngredients: String = ""
        val measures = arrayOf(cocktail.measure1, cocktail.measure2, cocktail.measure3, cocktail.measure4,
            cocktail.measure5, cocktail.measure6, cocktail.measure7, cocktail.measure8,
            cocktail.measure9, cocktail.measure10, cocktail.measure11, cocktail.measure12,
            cocktail.measure13, cocktail.measure14, cocktail.measure15)
        val ingredients = arrayOf(cocktail.ingredient1, cocktail.ingredient2, cocktail.ingredient3, cocktail.ingredient4,
            cocktail.ingredient5, cocktail.ingredient6, cocktail.ingredient7, cocktail.ingredient8,
            cocktail.ingredient9, cocktail.ingredient10, cocktail.ingredient11, cocktail.ingredient12,
            cocktail.ingredient13, cocktail.ingredient14, cocktail.ingredient15)
        var index = 0
        while (measures[index].isNotBlank()) {
            measureAndIngredients += measures[index] + " - " + ingredients[index] + "\n"
            index++
        }
        return measureAndIngredients.trim()
    }
    //endregion

    interface OnFragmentInteractionListener {
        fun backPressed()
    }
}
