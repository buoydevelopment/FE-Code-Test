package com.gvergara.buoytestcode.Models;

import java.io.Serializable;
import java.util.ArrayList;

public class ExtraInformation implements Serializable{

    String strInstructions;
    ArrayList<String> ingredients;
    ArrayList<String> measures;

    public String getStrInstructions() {
        return strInstructions;
    }

    public void setStrInstructions(String strInstructions) {
        this.strInstructions = strInstructions;
    }

    public ArrayList<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(ArrayList<String> ingredients) {
        this.ingredients = ingredients;
    }

    public ArrayList<String> getMeasures() {
        return measures;
    }

    public void setMeasures(ArrayList<String> measures) {
        this.measures = measures;
    }
}
