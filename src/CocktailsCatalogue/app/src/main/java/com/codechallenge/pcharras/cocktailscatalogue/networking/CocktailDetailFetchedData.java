package com.codechallenge.pcharras.cocktailscatalogue.networking;

import android.os.AsyncTask;
import android.widget.TextView;

import com.codechallenge.pcharras.cocktailscatalogue.model.Cocktail;
import com.codechallenge.pcharras.cocktailscatalogue.model.CocktailDetail;

/**
 * Created by mac on 13/5/18.
 */

public class CocktailDetailFetchedData extends AsyncTask<Void,Void,Void> {

    CocktailDetailResponse cocktailDetailResponse;
    CocktailDetail cocktailDetail;
    Cocktail cocktail;
    TextView tvIngredient1;
    TextView tvIngredient2;
    TextView tvMoreIngredients;
    String strIdDrink;

    public CocktailDetailFetchedData(Cocktail cocktail, TextView tvIngredient1, TextView tvIngredient2, TextView tvMoreIngredients) {
        this.cocktail = cocktail;
        this.tvIngredient1 = tvIngredient1;
        this.tvIngredient2 = tvIngredient2;
        this.tvMoreIngredients = tvMoreIngredients;
        this.strIdDrink = cocktail.getIdDrink();
    }

    @Override
    protected void onPostExecute(Void aVoid) {
        super.onPostExecute(aVoid);
        if (cocktailDetailResponse != null) {
            cocktailDetail = cocktailDetailResponse.getCocktailDetail();
            this.cocktail.setCocktailDetail(cocktailDetail);
            if (this.cocktailDetail.getIngredients().size() > 0) {
                this.tvIngredient1.setText("* " + this.cocktailDetail.getIngredients().get(0));
            }
            if (this.cocktailDetail.getIngredients().size() > 1) {
                this.tvIngredient2.setText("* " + this.cocktailDetail.getIngredients().get(1));
            }
            if (this.cocktailDetail.getCountMoreIngredients() > 1) {
                this.tvMoreIngredients.setText(String.valueOf("y " + this.cocktailDetail.getCountMoreIngredients()) + " ingredientes más");
            } else if (this.cocktailDetail.getCountMoreIngredients() == 1) {
                this.tvMoreIngredients.setText(String.valueOf("y " + this.cocktailDetail.getCountMoreIngredients()) + " ingrediente más");
            }
        }
    }

    @Override
    protected Void doInBackground(Void... params) {

            CocktailDetailRequest cocktailDetailRequest = new CocktailDetailRequest();
            try {
                cocktailDetailResponse = cocktailDetailRequest.LoadDataFromNetwork(strIdDrink);
            } catch (Exception e) {
                e.printStackTrace();
            }

            return null;

    }

}