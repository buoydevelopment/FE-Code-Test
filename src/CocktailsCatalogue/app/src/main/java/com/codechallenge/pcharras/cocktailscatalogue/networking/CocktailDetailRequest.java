package com.codechallenge.pcharras.cocktailscatalogue.networking;

import android.util.Log;

import com.codechallenge.pcharras.cocktailscatalogue.constants.Constants;

/**
 * Created by mac on 13/5/18.
 */

public class CocktailDetailRequest {

    private static final String kRequestMethodValue	= "lookup.php?i=";
    private static final String TAG = "CocktailDetailRequest";



    private String requestURL(String idDrink) throws Exception

    {
        String baseURL = Constants.url + kRequestMethodValue + idDrink;
        return baseURL;
    }

    public  CocktailDetailResponse LoadDataFromNetwork(String idDrink) throws  Exception {
        Log.i(TAG, this.requestURL(idDrink));
        CocktailDetailResponse cocktailDetailResponse = new CocktailDetailResponse(BaseRequest.executeGET(requestURL(idDrink)));
        return cocktailDetailResponse;
    }
}
