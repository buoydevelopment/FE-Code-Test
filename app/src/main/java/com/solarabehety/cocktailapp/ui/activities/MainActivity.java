package com.solarabehety.cocktailapp.ui.activities;

import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.widget.ProgressBar;

import com.solarabehety.cocktailapp.R;
import com.solarabehety.cocktailapp.model.Cocktail;
import com.solarabehety.cocktailapp.network.APIClient;
import com.solarabehety.cocktailapp.network.APIService;
import com.solarabehety.cocktailapp.ui.fragments.CocktailListFragment;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import io.reactivex.android.schedulers.AndroidSchedulers;
import io.reactivex.observers.DisposableSingleObserver;
import io.reactivex.schedulers.Schedulers;

public class MainActivity extends BaseActivity {

    @BindView(R.id.toolbar) Toolbar toolbar;
    @BindView(R.id.progressBar) ProgressBar progressBar;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        ButterKnife.bind(this);

        initActionBar();
        getCocktails();
    }

    private void initActionBar() {
        setSupportActionBar(toolbar);
        getSupportActionBar().setTitle("");
    }


    private void getCocktails() {
        APIService apiService = APIClient.getInstance().getClient().create(APIService.class);

        addDisposable(apiService.getCocktailList()
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .subscribeWith(new DisposableSingleObserver<List<Cocktail>>() {
                    @Override
                    public void onSuccess(List<Cocktail> cocktailList) {
                        Log.i(MainActivity.class.getSimpleName(), "COCKTAILS OK");
                        onCocktailsLoaded(cocktailList);
                    }

                    @Override
                    public void onError(Throwable e) {
                        Log.e(MainActivity.class.getSimpleName(), "COCKTAILS ERROR: " + e.getMessage());
                        onCocktailsLoaded(null);
                    }
                }));
    }

    private void onCocktailsLoaded(List<Cocktail> cocktails) {
        progressBar.setVisibility(View.GONE);

        getSupportFragmentManager().beginTransaction().
                replace(R.id.fragmentContainer, CocktailListFragment.newInstance(cocktails)).
                commit();
    }


}
