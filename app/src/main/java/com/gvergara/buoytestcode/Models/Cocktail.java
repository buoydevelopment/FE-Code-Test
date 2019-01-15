package com.gvergara.buoytestcode.Models;

import com.google.gson.annotations.SerializedName;

import java.io.Serializable;

public class Cocktail implements Serializable{

    @SerializedName("strDrink")
    private String name;
    @SerializedName("strDrinkThumb")
    private String photoUrl;
    @SerializedName("idDrink")
    private String coacktailId;
    private ExtraInformation extraInformation;

    public String getName() {
        return name;
    }

    public String getPhotoUrl() {
        return photoUrl;
    }

    public String getCoacktailId() {
        return coacktailId;
    }

    public ExtraInformation getExtraInformation() {
        return extraInformation;
    }

    public void setExtraInformation(ExtraInformation extraInformation) {
        this.extraInformation = extraInformation;
    }
}
