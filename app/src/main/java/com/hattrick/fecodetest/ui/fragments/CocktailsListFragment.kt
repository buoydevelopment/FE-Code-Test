package com.hattrick.fecodetest.ui.fragments

import android.content.Context
import android.graphics.Bitmap
import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.bumptech.glide.Glide
import com.bumptech.glide.load.MultiTransformation
import com.bumptech.glide.load.resource.bitmap.CenterCrop
import com.bumptech.glide.request.RequestOptions.bitmapTransform
import com.hattrick.fecodetest.R
import com.hattrick.fecodetest.common.extensions.disposedBy
import com.hattrick.fecodetest.databinding.ItemCocktailWrapperBinding
import com.hattrick.fecodetest.model.CocktailWrapper
import com.hattrick.fecodetest.ui.activities.BaseActivity
import com.hattrick.fecodetest.ui.viewmodels.CocktailsListViewModel
import com.jakewharton.rxbinding3.view.clicks
import com.jakewharton.rxbinding3.view.detaches
import com.minimize.android.rxrecycleradapter.RxDataSource
import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.CompositeDisposable
import jp.wasabeef.glide.transformations.RoundedCornersTransformation
import kotlinx.android.synthetic.main.fragment_cocktails_list.*


class CocktailsListFragment : Fragment() {

    //region Variables
    private var listener: OnFragmentInteractionListener? = null
    private lateinit var viewModel: CocktailsListViewModel
    private val disposables = CompositeDisposable()
    //endregion

    //region Life Cycle
    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View? {
        // Inflate the layout for this fragment
        return inflater.inflate(R.layout.fragment_cocktails_list, container, false)
    }

    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        setupToolbar()
        setupBindings()

        viewModel.tryFetchCocktails.onNext(Unit)
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
        (activity as? AppCompatActivity)?.supportActionBar?.setDisplayHomeAsUpEnabled(false)
        (activity as? AppCompatActivity)?.supportActionBar?.setDisplayShowHomeEnabled(false)
    }

    private fun setupBindings() {
        viewModel = CocktailsListViewModel()

        // Simple data source
        val rxDataSource = RxDataSource<ItemCocktailWrapperBinding, CocktailWrapper>(R.layout.item_cocktail_wrapper,
            listOf())

        val multiTransformation = MultiTransformation<Bitmap>(CenterCrop(),
            RoundedCornersTransformation(20, 0, RoundedCornersTransformation.CornerType.ALL))
        rxDataSource
            .asObservable()
            .subscribe { itemViewHolder ->

                val binding = itemViewHolder.viewDataBinding ?: return@subscribe
                binding.tvCocktailName.text = itemViewHolder.item?.name

                Glide.with(this)
                    .load(itemViewHolder.item?.thumb)
                    .apply(bitmapTransform(multiTransformation))
                    .into(binding.ivThumb)

                itemViewHolder.itemView.clicks()
                    .takeUntil(itemViewHolder.itemView.detaches())
                    .filter { itemViewHolder.item != null }
                    .map { itemViewHolder.item!! }
                    .subscribe { listener?.cocktailSelected(it) }
                    .disposedBy(disposables)

            }.disposedBy(disposables)

        rvCocktails.layoutManager = LinearLayoutManager(context)
        rxDataSource.bindRecyclerView(rvCocktails)

        viewModel.cocktails
            .observeOn(AndroidSchedulers.mainThread())
            .subscribe {
                rxDataSource.updateDataSet(it).updateAdapter()
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
    //endregion

    interface OnFragmentInteractionListener {
        fun cocktailSelected(cocktail: CocktailWrapper)
    }

}
