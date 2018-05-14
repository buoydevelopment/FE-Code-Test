package com.solarabehety.cocktailapp.model;


/**
 * Created by Sol Arabehety on 5/13/2018.
 */
public class Ingredient {
    private String name;
    private String measure;

    public Ingredient() {
    }

    public Ingredient(String name, String measure) {
        this.name = name;
        this.measure = measure;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMeasure() {
        return measure;
    }

    public void setMeasure(String measure) {
        this.measure = measure;
    }

    public String getIngredientAndMeasure() {
        return measure + " - " + name + "\n";
    }
}
