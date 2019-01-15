package com.gvergara.buoytestcode.UI;

import android.content.Intent;
import android.os.Bundle;
import android.support.v4.view.MenuItemCompat;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.SearchView;
import android.support.v7.widget.Toolbar;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.RelativeLayout;
import android.widget.Toast;

import com.gvergara.buoytestcode.Models.Cocktail;
import com.gvergara.buoytestcode.R;
import com.gvergara.buoytestcode.Service.DataManagerCallback;
import com.gvergara.buoytestcode.Service.DataManager;
import com.nostra13.universalimageloader.core.ImageLoader;
import com.nostra13.universalimageloader.core.ImageLoaderConfiguration;

import java.util.ArrayList;

import butterknife.BindView;
import butterknife.ButterKnife;

public class MainActivity extends AppCompatActivity implements CocktailsAdapter.ItemClickListener{

    @BindView(R.id.recyclerView) RecyclerView recyclerViewDrinks;
    @BindView(R.id.relativelayout_progress) RelativeLayout progress;

    private ArrayList<Cocktail> cocktailList;
    private CocktailsAdapter cocktailsAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        ButterKnife.bind(this);

        //layout manager
        LinearLayoutManager manager = new LinearLayoutManager(this);
        manager.setOrientation(LinearLayoutManager.VERTICAL);
        recyclerViewDrinks.setLayoutManager(manager);
        recyclerViewDrinks.setHasFixedSize(true);

        DataManager.init(this);
        ImageLoader.getInstance().init(ImageLoaderConfiguration.createDefault(this));

        cocktailList = new ArrayList<>();
        loadCocktails();

    }

    private void loadCocktails(){

        progress.setVisibility(View.VISIBLE);

        DataManagerCallback callback = new DataManagerCallback<ArrayList<Cocktail>>() {
            @Override
            public void onResponse(final ArrayList<Cocktail> objectList) {

                cocktailList = objectList;
                cocktailsAdapter = new CocktailsAdapter(cocktailList);
                cocktailsAdapter.setClickListener(MainActivity.this);
                recyclerViewDrinks.setAdapter(cocktailsAdapter);
                progress.setVisibility(View.INVISIBLE);
            }

            @Override
            public void onError(String error) {

                Toast.makeText(MainActivity.this, "Error", Toast.LENGTH_SHORT).show();
                progress.setVisibility(View.INVISIBLE);
            }
        };

        DataManager.getInstance().getCocktailList(callback);
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.

        getMenuInflater().inflate(R.menu.menu_main, menu);

        final MenuItem myActionMenuItem = menu.findItem(R.id.action_search);
        final SearchView searchView = (SearchView) myActionMenuItem.getActionView();
        searchView.setOnQueryTextListener(new SearchView.OnQueryTextListener() {
            @Override
            public boolean onQueryTextSubmit(String query) {
                return false;
            }

            @Override
            public boolean onQueryTextChange(String s) {
                if (cocktailsAdapter != null) {
                    cocktailsAdapter.getFilter().filter(s);
                }
                return false;
            }
        });

        MenuItemCompat.setOnActionExpandListener(myActionMenuItem, new MenuItemCompat.OnActionExpandListener() {
            @Override
            public boolean onMenuItemActionExpand(MenuItem item) {
                return true;
            }
            @Override
            public boolean onMenuItemActionCollapse(MenuItem item) {
                //filter
                return true;
            }
        });
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here. The action bar will
        // automatically handle clicks on the Home/Up button, so long
        // as you specify a parent activity in AndroidManifest.xml.
        int id = item.getItemId();

        //noinspection SimplifiableIfStatement
        if (id == R.id.action_search) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }

    @Override
    public void onClick(Cocktail cocktail) {

        Intent intent = new Intent(this, CocktailDetailActivity.class);
        Bundle b = new Bundle();
        b.putSerializable(Constants.COCKTAIL, cocktail);
        intent.putExtras(b);
        startActivity(intent);
    }
}
