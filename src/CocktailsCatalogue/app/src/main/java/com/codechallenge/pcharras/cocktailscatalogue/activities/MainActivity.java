package com.codechallenge.pcharras.cocktailscatalogue.activities;

import android.os.AsyncTask;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.View;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.codechallenge.pcharras.cocktailscatalogue.R;
import com.codechallenge.pcharras.cocktailscatalogue.activities.BaseActivity;
import com.codechallenge.pcharras.cocktailscatalogue.adapters.CocktailsRecyclerAdapter;
import com.codechallenge.pcharras.cocktailscatalogue.model.Cocktail;
import com.codechallenge.pcharras.cocktailscatalogue.networking.CocktailRequest;
import com.codechallenge.pcharras.cocktailscatalogue.networking.CocktailResponse;
import com.codechallenge.pcharras.cocktailscatalogue.networking.FetchedData;
import com.codechallenge.pcharras.cocktailscatalogue.util.ConnexionManager;

import java.util.ArrayList;

public class MainActivity extends BaseActivity {

    public static final String TAG = "MainActivity";
    public static CocktailResponse cocktailResponse;

    public static ArrayList<Cocktail> cocktails;

    public static RecyclerView rvCocktails;
    public static RelativeLayout rlError;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        if (!ConnexionManager.isConnected(this.getApplicationContext()))
        {
            Toast.makeText(this,
                    "Error: " + "Unable to connect", Toast.LENGTH_SHORT)
                    .show();
        }
        rvCocktails = (RecyclerView) findViewById(R.id.rvCocktails);
        rvCocktails.setLayoutManager(new LinearLayoutManager(this));
        rlError = (RelativeLayout) findViewById(R.id.rlError);
        FetchedData fetchedData = new FetchedData();
        fetchedData.execute();




    }
}
