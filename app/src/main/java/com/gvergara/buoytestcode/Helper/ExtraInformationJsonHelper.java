package com.gvergara.buoytestcode.Helper;

import com.gvergara.buoytestcode.Models.ExtraInformation;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class ExtraInformationJsonHelper {

    public ExtraInformation getFromJsonString(String stringResponse){

        try {
            ExtraInformation extraInformation = new ExtraInformation();
            JSONObject jsonObject = new JSONObject(stringResponse);
            JSONArray drinksArray = jsonObject.getJSONArray("drinks");
            if (drinksArray.length() > 0) {

                JSONObject extraInfoJson = drinksArray.getJSONObject(0);
                String instructions = extraInfoJson.getString("strInstructions");
                extraInformation.setStrInstructions(instructions);

                int limit = 1000;
                ArrayList<String> ingredients = new ArrayList<>();
                for (int i = 1; i < limit; i++) {
                    if (extraInfoJson.has("strIngredient" + i)) {
                        String ingrendient = extraInfoJson.getString("strIngredient" + i);
                        if (!isNullOrEmpty(ingrendient))
                            ingredients.add(ingrendient);
                    } else {
                        break;
                    }
                }
                extraInformation.setIngredients(ingredients);

                ArrayList<String> measures = new ArrayList<>();
                for (int i = 1; i < limit; i++) {
                    if (extraInfoJson.has("strMeasure" + i)) {
                        String measure = extraInfoJson.getString("strMeasure" + i);
                        if (!isNullOrEmpty(measure))
                            measures.add(measure);
                    } else {
                        break;
                    }
                }
                extraInformation.setMeasures(measures);
            }
            return extraInformation;

        } catch (JSONException e) {
            e.printStackTrace();
        }
        return null;
    }

    private boolean isNullOrEmpty(String str){
        return (str == null || str.isEmpty() || str.equals(" ") || str.equals("null"));
    }
}
