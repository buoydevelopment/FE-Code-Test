package com.codechallenge.pcharras.cocktailscatalogue.activities;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.codechallenge.pcharras.cocktailscatalogue.R;
import com.codechallenge.pcharras.cocktailscatalogue.constants.Constants;
import com.codechallenge.pcharras.cocktailscatalogue.model.Cocktail;
import com.codechallenge.pcharras.cocktailscatalogue.util.LoadImage;

import java.io.PrintWriter;
import java.io.StringWriter;


public class CocktailDetailActivity extends BaseActivity {

    public static final String TAG = "CocktailDetailActivity";
    private Cocktail cocktail;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cocktail_detail);

        initDataSources();
        setData();
    }

    private void initDataSources() {
        this.cocktail = (Cocktail) getIntent().getExtras().getSerializable(Constants.kCocktailData);

    }

    private void setData() {
        TextView tvIngrediets = (TextView) findViewById(R.id.tvIngrediets);
        TextView tvInstructions = (TextView) findViewById(R.id.tvInstructions);
        ImageView imgDrinkThumb = (ImageView) findViewById(R.id.imgDrinkThumb);

        setTitle(cocktail.getStrDrink());
        String ingredients;

        StringWriter stringWriter = new StringWriter();
        PrintWriter writer = new PrintWriter(stringWriter, true);

        for(int i = 0;i<cocktail.getCocktailDetail().getIngredients().size();i++)
        {
            writer.println(cocktail.getCocktailDetail().getIngredients().get(i));
        }

        ingredients = stringWriter.toString();

        tvIngrediets.setText(ingredients);

        tvInstructions.setText(cocktail.getCocktailDetail().getStrInstructions());
        LoadImage loadImage = new LoadImage(imgDrinkThumb);
        loadImage.execute(cocktail.getStrDrinkThumb());
    }
}
