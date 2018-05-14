package com.solarabehety.cocktailapp.network;

import com.google.gson.Gson;
import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.solarabehety.cocktailapp.model.Cocktail;
import com.solarabehety.cocktailapp.model.Ingredient;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import okhttp3.Interceptor;
import okhttp3.MediaType;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

/**
 * Created by Sol Arabehety on 5/13/2018.
 */
public class APICocktailListResponseInterceptor implements Interceptor {
    private final MediaType mJSON = MediaType.parse("application/json; charset=utf-8");
    private final Gson mGSON = new Gson();

    @Override
    public Response intercept(Chain chain) throws IOException {
        Request request = chain.request();
        Response response = chain.proceed(request);
        final ResponseBody body = response.body();

        String finalJson = parseDrinksJson(body.string());
        body.close();

        final Response.Builder newResponse = response.newBuilder().body(ResponseBody.create(mJSON, finalJson));
        return newResponse.build();
    }

    private String parseDrinksJson(String originalJson) {
        List<Cocktail> cocktails = new ArrayList<>();

        JsonParser parser = new JsonParser();
        JsonObject cocktailsJson = parser.parse(originalJson).getAsJsonObject();
        JsonArray cocktailsArray = cocktailsJson.getAsJsonArray("drinks");
        for (JsonElement drink : cocktailsArray) {
            Cocktail cocktail = parseCocktailObject(drink.getAsJsonObject());
            cocktails.add(cocktail);
        }

        return mGSON.toJson(cocktails);
    }

    public Cocktail parseCocktailObject(JsonObject cocktailObject) {
        Cocktail cocktail = mGSON.fromJson(cocktailObject, Cocktail.class);

        List<Ingredient> ingredients = new ArrayList<>();
        for (Map.Entry<String, JsonElement> keyValue : cocktailObject.entrySet()) {
            if (keyValue.getKey().contains("strIngredient") && keyValue.getValue() != null && !keyValue.getValue().isJsonNull() && !keyValue.getValue().getAsString().isEmpty()) {
                String ingredientName = keyValue.getValue().getAsString();
                String measure = cocktailObject.get(keyValue.getKey().replace("strIngredient", "strMeasure")).getAsString();
                ingredients.add(new Ingredient(ingredientName, measure));
            }
        }

        cocktail.setIngredients(ingredients.isEmpty() ? null : ingredients);
        return cocktail;
    }
}
