package com.gvergara.buoytestcode.UI;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.view.MenuItem;
import android.view.View;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.gvergara.buoytestcode.Models.Cocktail;
import com.gvergara.buoytestcode.Models.ExtraInformation;
import com.gvergara.buoytestcode.R;
import com.gvergara.buoytestcode.Service.DataManager;
import com.gvergara.buoytestcode.Service.DataManagerCallback;
import com.nostra13.universalimageloader.core.DisplayImageOptions;
import com.nostra13.universalimageloader.core.ImageLoader;

import butterknife.BindView;
import butterknife.ButterKnife;

public class CocktailDetailActivity extends AppCompatActivity {

    private Cocktail cocktail;

    @BindView(R.id.cocktail_image)
    ImageView imageViewCocktail;
    @BindView(R.id.textViewIngredients)
    TextView textViewIngredients;
    @BindView(R.id.textViewInstructions)
    TextView textViewInstruction;
    @BindView(R.id.relativelayout_progress)
    RelativeLayout progress;
    private DisplayImageOptions options;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_cocktail_detail);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        if (getSupportActionBar() != null) {
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        }

        ButterKnife.bind(this);

        options = new DisplayImageOptions.Builder()
                .resetViewBeforeLoading(true)  // default
                .cacheInMemory(true)
                .cacheOnDisk(true)
                .showImageOnLoading(R.drawable.cocktail_placeholder)
                .build();

        Bundle bundle = getIntent().getExtras();
        if (bundle != null) {
            cocktail = (Cocktail) bundle.getSerializable(Constants.COCKTAIL);
        }
        fillData();
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {

        if (item.getItemId() == android.R.id.home){
            finish();
        }
        return super.onOptionsItemSelected(item);
    }

    private void fillData(){

        if (cocktail != null) {

            setTitle(cocktail.getName());
            ImageLoader imageLoader = ImageLoader.getInstance();
            imageLoader.displayImage(cocktail.getPhotoUrl(), imageViewCocktail, options);

            if (cocktail.getExtraInformation() != null) {
                fillExtraInformation();
            }
            else {
                progress.setVisibility(View.VISIBLE);
                DataManager.getInstance().getCocktailDetail(cocktail.getCoacktailId(), new DataManagerCallback<ExtraInformation>() {
                    @Override
                    public void onResponse(ExtraInformation extraInformation) {
                        cocktail.setExtraInformation(extraInformation);
                        fillExtraInformation();
                        progress.setVisibility(View.INVISIBLE);
                    }

                    @Override
                    public void onError(String error) {
                        progress.setVisibility(View.INVISIBLE);
                        Toast.makeText(CocktailDetailActivity.this, "Error", Toast.LENGTH_SHORT).show();
                    }
                });
            }
        }
    }

    private void fillExtraInformation() {

        textViewInstruction.setText(cocktail.getExtraInformation().getStrInstructions());
        String ingredientsAndMeasures = "";
        for (int i = 0; i < cocktail.getExtraInformation().getIngredients().size(); i++) {
            ingredientsAndMeasures += cocktail.getExtraInformation().getMeasures().get(i) + " - " + cocktail.getExtraInformation().getIngredients().get(i) + "\n";
        }
        textViewIngredients.setText(ingredientsAndMeasures);
    }

}
