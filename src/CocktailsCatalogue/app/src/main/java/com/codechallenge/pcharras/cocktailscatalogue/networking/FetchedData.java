package com.codechallenge.pcharras.cocktailscatalogue.networking;

import android.os.AsyncTask;
import android.view.View;

import com.codechallenge.pcharras.cocktailscatalogue.activities.MainActivity;
import com.codechallenge.pcharras.cocktailscatalogue.adapters.CocktailsRecyclerAdapter;

/**
 * Created by mac on 12/5/18.
 */

public class FetchedData extends AsyncTask<Void,Void,Void> {
    CocktailResponse cocktailResponse;

    @Override
    protected void onPostExecute(Void aVoid) {
        super.onPostExecute(aVoid);
        if (cocktailResponse != null) {
            MainActivity.cocktails = cocktailResponse.getCocktails();
            CocktailsRecyclerAdapter cocktailsRecyclerAdapter = new CocktailsRecyclerAdapter(MainActivity.cocktails);
            MainActivity.rvCocktails.setAdapter(cocktailsRecyclerAdapter);
        }
        else
        {
            MainActivity.rlError.setVisibility(View.VISIBLE);
        }

    }

    @Override
    protected Void doInBackground(Void... params) {

        CocktailRequest cocktailRequest = new CocktailRequest();
        try {
            cocktailResponse = cocktailRequest.LoadDataFromNetwork();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
