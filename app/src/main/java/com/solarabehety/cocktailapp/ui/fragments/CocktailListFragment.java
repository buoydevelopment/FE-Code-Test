package com.solarabehety.cocktailapp.ui.fragments;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import com.google.gson.Gson;
import com.solarabehety.cocktailapp.R;
import com.solarabehety.cocktailapp.model.Cocktail;
import com.solarabehety.cocktailapp.network.APIClient;
import com.solarabehety.cocktailapp.network.APIService;
import com.solarabehety.cocktailapp.tracking.ThrottleTrackingBus;
import com.solarabehety.cocktailapp.ui.activities.CocktailDetailActivity;
import com.solarabehety.cocktailapp.ui.activities.MainActivity;
import com.solarabehety.cocktailapp.ui.adapters.CocktailRecyclerViewAdapter;
import com.solarabehety.cocktailapp.utils.Constants;

import java.util.ArrayList;
import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.observers.DisposableSingleObserver;
import io.reactivex.schedulers.Schedulers;

public class CocktailListFragment extends Fragment {
    private Context mContext;
    private MainActivity mParentActivity;
    private List<Cocktail> mCocktails;
    private ThrottleTrackingBus trackingBus;
    private CocktailRecyclerViewAdapter mListAdapter;

    @BindView(R.id.rvCocktails) RecyclerView rvCocktails;
    @BindView(R.id.tvNoCocktailsAvailable) TextView tvNoCocktailsAvailable;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
        View view = inflater.inflate(R.layout.fragment_cocktail_list, container, false);
        ButterKnife.bind(this, view);
        mContext = getActivity();
        mParentActivity = (MainActivity) getActivity();

        loadList();
        return view;
    }

    @Override
    public void onResume() {
        super.onResume();
        trackingBus = new ThrottleTrackingBus(this::onTrackViewResponse, Throwable::printStackTrace);
    }

    @Override
    public void onPause() {
        super.onPause();
        trackingBus.unsubscribe();
    }


    public static CocktailListFragment newInstance(List<Cocktail> cocktailList) {
        CocktailListFragment fragment = new CocktailListFragment();
        fragment.mCocktails = new ArrayList<>(cocktailList);
        return fragment;
    }

    private void loadList() {
        if (mCocktails == null || mCocktails.isEmpty()) {
            tvNoCocktailsAvailable.setVisibility(View.VISIBLE);
            return;
        }

        tvNoCocktailsAvailable.setVisibility(View.GONE);

        mListAdapter = new CocktailRecyclerViewAdapter(mContext, mCocktails);
        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(mContext);
        rvCocktails.setLayoutManager(linearLayoutManager);
        rvCocktails.setAdapter(mListAdapter);

        setRecyclerViewObservers();
    }

    /**
     * Set list observers.
     * - Scroll observer: to get visible cocktails details
     * - Click observer: to get the tapped cocktail
     */
    private void setRecyclerViewObservers() {
        rvCocktails.addOnScrollListener(new RecyclerView.OnScrollListener() {
            @Override
            public void onScrolled(RecyclerView recyclerView, int dx, int dy) {
                final ThrottleTrackingBus.VisibleState visibleStateFinal = new ThrottleTrackingBus.VisibleState(
                        ((LinearLayoutManager) rvCocktails.getLayoutManager()).findFirstCompletelyVisibleItemPosition(),
                        ((LinearLayoutManager) rvCocktails.getLayoutManager()).findLastVisibleItemPosition());

                trackingBus.postViewEvent(visibleStateFinal);
            }
        });

        mParentActivity.addDisposable(((CocktailRecyclerViewAdapter) rvCocktails.getAdapter())
                .onItemClick()
                .subscribe(this::startCocktailDetailActivity));
    }

    private void startCocktailDetailActivity(Cocktail clickedCocktail) {
        Intent intent = new Intent(mContext, CocktailDetailActivity.class);
        intent.putExtra(Constants.SELECTED_COCKTAIL, new Gson().toJson(clickedCocktail));
        startActivity(intent);
    }

    private void onTrackViewResponse(ThrottleTrackingBus.VisibleState visibleState) {
        Log.d(CocktailListFragment.class.getSimpleName(), "Received to be tracked: " + visibleState.toString());
        getVisibleCocktailsDetail(visibleState.firstCompletelyVisible, visibleState.lastCompletelyVisible);
    }

    private void getVisibleCocktailsDetail(int fromItem, int toItem) {
        for (int i = fromItem; i <= toItem; i++) {
            if (mCocktails.get(i).getIngredients() == null)
                getCocktailDetail(i);
        }
    }

    /**
     * Calls API to get cocktail details (ingredients).
     * Then, save the information obtained and notify the adapter.
     *
     * @param itemPosition recycler view position clicked
     */
    private void getCocktailDetail(final int itemPosition) {
        APIService apiService = APIClient.getInstance().getClient().create(APIService.class);

        mParentActivity.addDisposable(apiService.getCocktailDetail(mCocktails.get(itemPosition).getId())
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeWith(new DisposableSingleObserver<List<Cocktail>>() {
                    @Override
                    public void onSuccess(List<Cocktail> cocktailList) {
                        mCocktails.set(itemPosition, cocktailList.get(0));
                        rvCocktails.getAdapter().notifyItemChanged(itemPosition);
                    }

                    @Override
                    public void onError(Throwable e) {
                        Log.e(CocktailListFragment.class.getSimpleName(), "Error getting cocktail detail: " + e.getMessage());
                    }
                }));
    }


}
