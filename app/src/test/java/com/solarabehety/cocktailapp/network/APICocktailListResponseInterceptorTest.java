package com.solarabehety.cocktailapp.network;


import android.content.res.Resources;

import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import com.solarabehety.cocktailapp.R;
import com.solarabehety.cocktailapp.model.Cocktail;
import com.solarabehety.cocktailapp.model.Ingredient;

import org.apache.commons.io.IOUtils;
import org.junit.Assert;
import org.junit.Test;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStreamReader;
import java.nio.charset.Charset;

/**
 * Created by Sol Arabehety on 5/14/2018.
 */
public class APICocktailListResponseInterceptorTest {
    public static final String ASSET_BASE_PATH = "../app/src/test/resources/";

    @Test
    public void parseCocktailObject_NormalUseCase() throws IOException {

        String normalUseCaseCocktailListJSON = readJsonFile("cocktail_list_input.json");
        JsonObject json = new JsonParser().parse(normalUseCaseCocktailListJSON).getAsJsonObject();

        Cocktail cocktailResult = new APICocktailListResponseInterceptor().parseCocktailObject(json);

        Assert.assertEquals(cocktailResult.getId(), "16108");
        Assert.assertEquals(cocktailResult.getName(), "9 1/2 Weeks");
        Assert.assertEquals(cocktailResult.getImage(), "https://www.thecocktaildb.com/images/media/drink/xvwusr1472669302.jpg");
        Assert.assertEquals(cocktailResult.getInstructions(), "Combine all ingredients in glass mixer. Chill and strain into Cocktail glass. Garnish with sliced strawberry.");

        Assert.assertEquals(cocktailResult.getIngredients().get(0).getName(), "Absolut Citron");
        Assert.assertEquals(cocktailResult.getIngredients().get(0).getMeasure(), "2 oz ");

        Assert.assertEquals(cocktailResult.getIngredients().get(1).getName(), "Orange Curacao");
        Assert.assertEquals(cocktailResult.getIngredients().get(1).getMeasure(), "1/2 oz ");

        Assert.assertEquals(cocktailResult.getIngredients().get(2).getName(), "Strawberry liqueur");
        Assert.assertEquals(cocktailResult.getIngredients().get(2).getMeasure(), "1 splash ");

        Assert.assertEquals(cocktailResult.getIngredients().get(3).getName(), "Orange juice");
        Assert.assertEquals(cocktailResult.getIngredients().get(3).getMeasure(), "1 oz ");

        Assert.assertEquals(cocktailResult.getIngredients().size(), 4);
    }

    public String readJsonFile(String filename) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(new FileInputStream(ASSET_BASE_PATH + filename)));
        StringBuilder sb = new StringBuilder();
        String line = br.readLine();
        while (line != null) {
            sb.append(line);
            line = br.readLine();
        }

        return sb.toString();
    }

}