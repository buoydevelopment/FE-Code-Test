package com.codechallenge.pcharras.cocktailscatalogue.adapters;

import android.content.Context;
import android.content.Intent;
import android.graphics.drawable.Drawable;
import android.os.AsyncTask;
import android.support.v7.widget.CardView;
import android.support.v7.widget.RecyclerView;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.codechallenge.pcharras.cocktailscatalogue.R;
import com.codechallenge.pcharras.cocktailscatalogue.activities.CocktailDetailActivity;
import com.codechallenge.pcharras.cocktailscatalogue.activities.MainActivity;
import com.codechallenge.pcharras.cocktailscatalogue.constants.Constants;
import com.codechallenge.pcharras.cocktailscatalogue.model.Cocktail;
import com.codechallenge.pcharras.cocktailscatalogue.networking.CocktailDetailFetchedData;
import com.codechallenge.pcharras.cocktailscatalogue.util.LoadImage;

import java.io.InputStream;
import java.net.URL;
import java.util.ArrayList;

/**
 * Created by mac on 12/5/18.
 */

public class CocktailsRecyclerAdapter extends RecyclerView.Adapter<CocktailsRecyclerAdapter
        .CocktailViewHolder> {

    ArrayList<Cocktail> cocktails;

    public CocktailsRecyclerAdapter(ArrayList<Cocktail> cocktails) {
        this.cocktails = cocktails;
    }

    @Override
    public CocktailViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        LayoutInflater li = (LayoutInflater) parent.getContext().getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        View itemView = li.inflate(R.layout.cocktail_card_view,parent,false);
        return new CocktailViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(final CocktailViewHolder holder, final int position) {
        final Cocktail cocktail = cocktails.get(position);
        holder.tvDrink.setText(String.valueOf(cocktail.getStrDrink()));
        //Clear the values
        holder.imgDrinkThumb.setImageResource(android.R.color.transparent);
        holder.tvIngredient1.setText("");
        holder.tvIngredient2.setText("");
        holder.tvMoreIngredients.setText("");
        LoadImage loadImage = new LoadImage(holder.imgDrinkThumb);
        loadImage.execute(cocktail.getStrDrinkThumb());
        if (cocktail.getCocktailDetail() == null)
        {
            CocktailDetailFetchedData cocktailDetailFetchedData = new CocktailDetailFetchedData(cocktail,holder.tvIngredient1,holder.tvIngredient2,holder.tvMoreIngredients);
            cocktailDetailFetchedData.execute();
        }
        else
        {
            if (cocktail.getCocktailDetail().getIngredients().size() > 0) {
                holder.tvIngredient1.setText("* " + cocktail.getCocktailDetail().getIngredients().get(0));
            }
            if (cocktail.getCocktailDetail().getIngredients().size() > 1) {
                holder.tvIngredient2.setText("* " + cocktail.getCocktailDetail().getIngredients().get(1));
            }
            if (cocktail.getCocktailDetail().getCountMoreIngredients() > 1) {
                holder.tvMoreIngredients.setText(String.valueOf("y " + cocktail.getCocktailDetail().getCountMoreIngredients()) + " ingredientes más");
            }
            else if (cocktail.getCocktailDetail().getCountMoreIngredients() == 1) {
                holder.tvMoreIngredients.setText(String.valueOf("y " + cocktail.getCocktailDetail().getCountMoreIngredients()) + " ingrediente más");
            }
        }

        holder.cardView.setOnClickListener(new View.OnClickListener(){
            private final String LOGCAT="CardView";
            @Override
            public void onClick(View v) {
                Log.d(LOGCAT, "CardView onClick at" + position);
                if (cocktail.getCocktailDetail() != null) {
                    Intent intent = null;
                    intent = new Intent(holder.itemView.getContext(), CocktailDetailActivity.class);
                    intent.putExtra(Constants.kCocktailData, cocktail);
                    holder.itemView.getContext().startActivity(intent);
                }
            }

        });
    }

    @Override
    public int getItemCount() {
            return cocktails.size();
    }

    class CocktailViewHolder extends RecyclerView.ViewHolder {
        TextView tvDrink;
        ImageView imgDrinkThumb;
        TextView tvIngredient1;
        TextView tvIngredient2;
        TextView tvMoreIngredients;
        CardView cardView;
        View itemView;
        public CocktailViewHolder(View itemView) {
            super(itemView);
            tvDrink = (TextView) itemView.findViewById(R.id.tvDrink);
            tvIngredient1 = (TextView) itemView.findViewById(R.id.tvIngredient1);
            tvIngredient2 = (TextView) itemView.findViewById(R.id.tvIngredient2);
            tvMoreIngredients = (TextView) itemView.findViewById(R.id.tvMoreIngredients);
            imgDrinkThumb = (ImageView) itemView.findViewById(R.id.imgDrinkThumb);
            cardView = (CardView) itemView.findViewById(R.id.cardView);
            this.itemView = itemView;
        }
    }

}
