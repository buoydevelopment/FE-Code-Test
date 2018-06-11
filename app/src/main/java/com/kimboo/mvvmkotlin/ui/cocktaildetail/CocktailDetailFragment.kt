package com.kimboo.mvvmkotlin.ui.cocktaildetail

import android.arch.lifecycle.ViewModelProviders
import android.graphics.drawable.Drawable
import android.os.Bundle
import android.support.v4.app.Fragment
import android.support.v7.app.AppCompatActivity
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import com.bumptech.glide.Glide
import com.bumptech.glide.load.DataSource
import com.bumptech.glide.load.engine.GlideException
import com.bumptech.glide.request.RequestListener
import com.bumptech.glide.request.target.Target
import com.kimboo.mvvmkotlin.MyApp
import com.kimboo.mvvmkotlin.R
import com.kimboo.mvvmkotlin.databinding.FragmentCocktailDetailBinding
import com.kimboo.mvvmkotlin.di.modules.MyViewModelFactory
import com.kimboo.mvvmkotlin.model.Cocktail
import kotlinx.android.synthetic.main.fragment_cocktail_detail.*
import javax.inject.Inject

/**
 * Created by Agustin Tomas Larghi on 31/3/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
class CocktailDetailFragment: Fragment() {

    //region Constant variables declaration
    companion object {
        var TAG: String = CocktailDetailFragment.javaClass.simpleName
        val ARG_COCKTAIL_BUNDLE = "arg_cocktail_bundle"

        fun newInstance(cocktail: Cocktail): CocktailDetailFragment {
            val fragment = CocktailDetailFragment()
            val bundle = Bundle()
            bundle.putParcelable(ARG_COCKTAIL_BUNDLE, cocktail)
            fragment.arguments = bundle
            return fragment
        }
    }
    //endregion

    //region Variables declaration
    @Inject
    lateinit var viewModelFactory: MyViewModelFactory

    private lateinit var userDetailProfileBinding: FragmentCocktailDetailBinding //Generated automatically
    private lateinit var cocktailDetailViewModel: CocktailDetailViewModel
    //endregion

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?) =
            inflater!!.inflate(R.layout.fragment_cocktail_detail, container, false)

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)
        MyApp.viewInjector.inject(this)

        with (activity as AppCompatActivity) {
            // In the Master/Detail flow since it's a little bit tricky to handle the parallax effect
            // in the Master/Detail I'm just hiding everything related to the parallax
            cocktailDetailToolbar?.let { toolbar ->
                setSupportActionBar(toolbar)
                supportActionBar?.setDisplayHomeAsUpEnabled(true)
                supportActionBar?.setHomeButtonEnabled(true)
            }
        }

        userDetailProfileBinding = FragmentCocktailDetailBinding.bind(view)
        cocktailDetailViewModel = ViewModelProviders.of(this, viewModelFactory).get(CocktailDetailViewModel::class.java)
        userDetailProfileBinding.cocktailDetailViewModel = cocktailDetailViewModel
        arguments?.let {
            val cocktail = it.get(ARG_COCKTAIL_BUNDLE) as Cocktail
            cocktailDetailViewModel.setCocktail(cocktail);

            // Usually we would load the image using DataBinding, but since we need to know when the loading
            // has finished, we don't have other choice but to do it here
            Glide.with(context!!).load(cocktail.thumbnailUrl)
                    .listener(object : RequestListener<Drawable> {
                        override fun onLoadFailed(e: GlideException?, model: Any?, target: Target<Drawable>?, isFirstResource: Boolean): Boolean {
                            activity?.startPostponedEnterTransition()
                            return false
                        }

                        override fun onResourceReady(resource: Drawable?, model: Any?, target: Target<Drawable>?, dataSource: DataSource?, isFirstResource: Boolean): Boolean {
                            activity?.startPostponedEnterTransition()
                            return false
                        }
                    })
                    .into(userDetailImageView)
        }
    }

    //endregion
}