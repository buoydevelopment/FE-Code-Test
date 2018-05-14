package com.solarabehety.cocktailapp.model;

import com.google.gson.annotations.SerializedName;

import java.util.List;

/**
 * Created by Sol Arabehety on 5/13/2018.
 */
public class Cocktail {

    @SerializedName("idDrink")
    private String id;

    @SerializedName("strDrink")
    private String name;

    @SerializedName("strDrinkThumb")
    private String image;

    @SerializedName("strInstructions")
    private String instructions;

    private List<Ingredient> ingredients;

    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getImage() {
        return image;
    }

    public String getInstructions() {
        return instructions;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setInstructions(String instructions) {
        this.instructions = instructions;
    }

    public void setIngredients(List<Ingredient> ingredients) {
        this.ingredients = ingredients;
    }
}
