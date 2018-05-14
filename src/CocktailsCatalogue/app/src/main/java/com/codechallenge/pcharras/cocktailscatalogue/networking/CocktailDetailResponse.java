package com.codechallenge.pcharras.cocktailscatalogue.networking;

import com.codechallenge.pcharras.cocktailscatalogue.model.CocktailDetail;
import com.codechallenge.pcharras.cocktailscatalogue.util.CRJSON;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;

/**
 * Created by mac on 13/5/18.
 */

public class CocktailDetailResponse {

    private CocktailDetail cocktailDetail;
    private String data;

    public CocktailDetailResponse(String jsonString) {
        JSONObject data		= CRJSON.newObj(jsonString);
        JSONArray JSONCocktails = data.optJSONArray("drinks");
        this.data = jsonString;
        this.cocktailDetail = new CocktailDetail(JSONCocktails.optJSONObject(0));



    }

    public CocktailDetail getCocktailDetail() {
        return cocktailDetail;
    }

    public void setCocktailDetail(CocktailDetail cocktailDetail) {
        this.cocktailDetail = cocktailDetail;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }
}
