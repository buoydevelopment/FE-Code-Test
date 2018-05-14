package com.codechallenge.pcharras.cocktailscatalogue.model;

import org.json.JSONObject;

import java.io.Serializable;
import java.util.ArrayList;

/**
 * Created by mac on 12/5/18.
 */

public class Cocktail implements Serializable {

    private CocktailDetail cocktailDetail;
    private String strDrink;
    private String strDrinkThumb;
    private String idDrink;

    public Cocktail(JSONObject jsonObject)
    {
        if(jsonObject == null)
        {
            return;
        }
        strDrink             = jsonObject.optString("strDrink");
        strDrinkThumb              = jsonObject.optString("strDrinkThumb");
        idDrink             = jsonObject.optString("idDrink");

        cocktailDetail = null;

    }

    public Cocktail(String strDrink) {
        this.strDrink = strDrink;
    }

    public CocktailDetail getCocktailDetail() {

        if (cocktailDetail == null)
        {
            //Call the Service
            return cocktailDetail;
        }
        else {
            return cocktailDetail;
        }
    }

    public void setCocktailDetail(CocktailDetail cocktailDetail) {
        this.cocktailDetail = cocktailDetail;
    }

    public String getStrDrink() {
        return strDrink;
    }

    public void setStrDrink(String strDrink) {
        this.strDrink = strDrink;
    }

    public String getStrDrinkThumb() {
        return strDrinkThumb;
    }

    public void setStrDrinkThumb(String strDrinkThumb) {
        this.strDrinkThumb = strDrinkThumb;
    }

    public String getIdDrink() {
        return idDrink;
    }

    public void setIdDrink(String idDrink) {
        this.idDrink = idDrink;
    }

}
