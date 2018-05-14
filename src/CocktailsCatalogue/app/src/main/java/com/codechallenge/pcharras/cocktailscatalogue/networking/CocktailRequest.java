package com.codechallenge.pcharras.cocktailscatalogue.networking;


import android.util.Log;

import com.codechallenge.pcharras.cocktailscatalogue.constants.Constants;

/**
 * Created by mac on 12/5/18.
 */

public class CocktailRequest {

    private static final String kRequestMethodValue	= "filter.php?g=Cocktail_glass";
    private static final String TAG = "CocktailRequest";



    private String requestURL() throws Exception

    {
        String baseURL = Constants.url + kRequestMethodValue;
        return baseURL;
    }

    public  CocktailResponse LoadDataFromNetwork() throws  Exception {
        Log.i(TAG, this.requestURL());
        CocktailResponse cocktailResponse = new CocktailResponse(BaseRequest.executeGET(requestURL()));
        return cocktailResponse;
    }

}
