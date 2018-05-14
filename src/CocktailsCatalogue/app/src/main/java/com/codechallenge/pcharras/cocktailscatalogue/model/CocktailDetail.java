package com.codechallenge.pcharras.cocktailscatalogue.model;

import org.json.JSONObject;

import java.io.Serializable;
import java.util.ArrayList;

/**
 * Created by mac on 12/5/18.
 */

public class CocktailDetail implements Serializable {

    private String strInstructions;
    private String strDrink;
    private String idDrink;
    private String strDrinkThumb;
    private ArrayList<String> ingredients;
    private int countMoreIngredients;

    public CocktailDetail(String strInstructions, String strDrink, String idDrink, String strDrinkThumb, ArrayList<String> ingredients, int countMoreIngredients) {
        this.strInstructions = strInstructions;
        this.strDrink = strDrink;
        this.idDrink = idDrink;
        this.strDrinkThumb = strDrinkThumb;
        this.ingredients = ingredients;
        this.countMoreIngredients = countMoreIngredients;
    }


    public CocktailDetail(JSONObject jsonObject)
    {
        if(jsonObject == null)
        {
            return;
        }
        strInstructions     = jsonObject.optString("strInstructions");
        strDrinkThumb       = jsonObject.optString("strDrinkThumb");
        idDrink             = jsonObject.optString("idDrink");
        strDrink            = jsonObject.optString("strDrink");

        String strIngredient;
        ingredients = new ArrayList<String>();

        for (int i = 1; i < 16; i++) {

            strIngredient = jsonObject.optString("strIngredient" + String.valueOf(i));
            if (!strIngredient.equalsIgnoreCase("") && !strIngredient.equalsIgnoreCase("null")) {
                ingredients.add(strIngredient);
            }

        }

        if (ingredients.size() > 2)
        {
            countMoreIngredients = ingredients.size() - 2;
        }

    }

    public String getStrInstructions() {
        return strInstructions;
    }

    public void setStrInstructions(String strInstructions) {
        this.strInstructions = strInstructions;
    }

    public String getStrDrink() {
        return strDrink;
    }

    public void setStrDrink(String strDrink) {
        this.strDrink = strDrink;
    }

    public String getIdDrink() {
        return idDrink;
    }

    public void setIdDrink(String idDrink) {
        this.idDrink = idDrink;
    }

    public ArrayList<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(ArrayList<String> ingredients) {
        this.ingredients = ingredients;
    }


    public int getCountMoreIngredients() {
        return countMoreIngredients;
    }

    public void setCountMoreIngredients(int countMoreIngredients) {
        this.countMoreIngredients = countMoreIngredients;
    }

    public String getStrDrinkThumb() {
        return strDrinkThumb;
    }

    public void setStrDrinkThumb(String strDrinkThumb) {
        this.strDrinkThumb = strDrinkThumb;
    }
}
