package com.codechallenge.pcharras.cocktailscatalogue.networking;

import com.codechallenge.pcharras.cocktailscatalogue.model.Cocktail;
import com.codechallenge.pcharras.cocktailscatalogue.util.CRJSON;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;

/**
 * Created by mac on 12/5/18.
 */

public class CocktailResponse {

    private ArrayList<Cocktail> cocktails;
    private String data;

    public CocktailResponse(String jsonString) {
        this.cocktails = new ArrayList<Cocktail>();
        JSONObject data		= CRJSON.newObj(jsonString);
        JSONArray JSONCocktails = data.optJSONArray("drinks");
        this.data = jsonString;
        for (int i = 0; i < JSONCocktails.length(); i++) {
            this.cocktails.add(new Cocktail(JSONCocktails.optJSONObject(i)));
        }


    }

    public ArrayList<Cocktail> getCocktails() {
        return cocktails;
    }

    public void setCocktails(ArrayList<Cocktail> cocktails) {
        this.cocktails = cocktails;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }



}
