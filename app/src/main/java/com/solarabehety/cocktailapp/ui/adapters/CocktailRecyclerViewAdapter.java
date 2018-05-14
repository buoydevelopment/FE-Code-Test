package com.solarabehety.cocktailapp.ui.adapters;

import android.content.Context;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.solarabehety.cocktailapp.R;
import com.solarabehety.cocktailapp.model.Cocktail;
import com.squareup.picasso.Picasso;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import io.reactivex.Observable;
import io.reactivex.subjects.PublishSubject;

/**
 * Created by Sol Arabehety on 5/13/2018.
 */
public class CocktailRecyclerViewAdapter extends RecyclerView.Adapter<CocktailRecyclerViewAdapter.CocktailViewHolder> {
    private List<Cocktail> cocktailList;
    private Context mContext;
    private final PublishSubject<Cocktail> onCocktailClicked = PublishSubject.create();

    public CocktailRecyclerViewAdapter(Context context, List<Cocktail> cocktailList) {
        this.cocktailList = cocktailList;
        mContext = context;
    }

    @Override
    public CocktailViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View layoutView = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_cocktail, parent, false);
        return new CocktailViewHolder(layoutView);
    }

    @Override
    public void onBindViewHolder(CocktailViewHolder holder, int position) {
        final Cocktail listItem = cocktailList.get(position);
        holder.tvName.setText(listItem.getName());

        Picasso.get().load(listItem.getImage()).into(holder.ivThumb);
        holder.itemView.setOnClickListener(v -> onCocktailClicked.onNext(listItem));

        if (listItem.getIngredients() != null && !listItem.getIngredients().isEmpty()) {
            holder.tvIngredients.setText(getFirstTwoIngredients(listItem));
            holder.tvMoreIngredients.setText(getAdditionaIngredients(listItem));
        } else {
            holder.tvIngredients.setText("");
            holder.tvMoreIngredients.setText("");
        }
    }

    private String getFirstTwoIngredients(Cocktail listItem) {
        String ingredients = "•  " + listItem.getIngredients().get(0).getName() + "\n";
        ingredients += listItem.getIngredients().size() > 1 ? "•  " + listItem.getIngredients().get(1).getName() : "";
        return ingredients;
    }

    private String getAdditionaIngredients(Cocktail listItem) {
        String moreIngredients = mContext.getResources().getString(R.string.and_x_more_ingredients);
        return listItem.getIngredients().size() > 2 ?
                moreIngredients.replace("N", listItem.getIngredients().size() - 2 + "") : "";
    }

    @Override
    public int getItemCount() {
        return cocktailList.size();
    }

    public Observable<Cocktail> onItemClick() {
        return onCocktailClicked;
    }

    public List<Cocktail> getCurrentCocktails() {
        return cocktailList;
    }

    static class CocktailViewHolder extends RecyclerView.ViewHolder {
        @BindView(R.id.tvName) TextView tvName;
        @BindView(R.id.tvIngredients) TextView tvIngredients;
        @BindView(R.id.tvMoreIngredients) TextView tvMoreIngredients;
        @BindView(R.id.ivThumb) ImageView ivThumb;


        CocktailViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }


}
