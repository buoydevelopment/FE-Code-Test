package com.solarabehety.cocktailapp.ui.activities;

import android.content.Context;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.text.method.ScrollingMovementMethod;
import android.view.MenuItem;
import android.widget.ImageView;
import android.widget.TextView;

import com.google.gson.Gson;
import com.solarabehety.cocktailapp.R;
import com.solarabehety.cocktailapp.model.Cocktail;
import com.solarabehety.cocktailapp.model.Ingredient;
import com.solarabehety.cocktailapp.utils.Constants;
import com.solarabehety.cocktailapp.utils.Utils;
import com.squareup.picasso.Picasso;

import butterknife.BindView;
import butterknife.ButterKnife;


public class CocktailDetailActivity extends AppCompatActivity {
    private Cocktail mCocktail;

    @BindView(R.id.toolbar) Toolbar toolbar;
    @BindView(R.id.tvToolbarTitle) TextView tvToolbarTitle;
    @BindView(R.id.tvCocktailRecipe) TextView tvCocktailRecipe;
    @BindView(R.id.ivCocktailImage) ImageView ivCocktailImage;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cocktail_detail);
        ButterKnife.bind(this);

        Bundle b = getIntent().getExtras();
        if (b != null && b.getString(Constants.SELECTED_COCKTAIL) != null) {
            mCocktail = new Gson().fromJson(b.getString(Constants.SELECTED_COCKTAIL), Cocktail.class);
            initActionBar();
            initCocktailData();
        }
    }

    private void initCocktailData() {
        Picasso.get().load(mCocktail.getImage()).into(ivCocktailImage);

        if (mCocktail.getIngredients() != null) {
            StringBuilder builder = new StringBuilder();
            for (Ingredient ingredient : mCocktail.getIngredients())
                builder.append(ingredient.getIngredientAndMeasure());

            builder.append("\n" + getString(R.string.how_to_prepare) + "\n\n");
            builder.append(mCocktail.getInstructions());

            tvCocktailRecipe.setMovementMethod(new ScrollingMovementMethod());
            tvCocktailRecipe.setText(builder.toString());
        }
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();
        if (id == android.R.id.home) {
            finish();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }

    private void initActionBar() {
        toolbar.setTitle("");
        tvToolbarTitle.setText(mCocktail.getName());
        setSupportActionBar(toolbar);
        Utils.initActionBar(getSupportActionBar());
    }

}
