package com.gvergara.buoytestcode.UI;

import android.support.annotation.NonNull;
import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Filter;
import android.widget.Filterable;
import android.widget.ImageView;
import android.widget.TextView;

import com.gvergara.buoytestcode.Models.Cocktail;
import com.gvergara.buoytestcode.Models.ExtraInformation;
import com.gvergara.buoytestcode.R;
import com.gvergara.buoytestcode.Service.DataManager;
import com.gvergara.buoytestcode.Service.DataManagerCallback;
import com.nostra13.universalimageloader.core.DisplayImageOptions;
import com.nostra13.universalimageloader.core.ImageLoader;

import java.util.ArrayList;

import butterknife.BindView;
import butterknife.ButterKnife;

public class CocktailsAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> implements Filterable {

    private ArrayList<Cocktail> cocktailArrayList;
    private ArrayList<Cocktail> cocktailArrayListAux;
    private ItemClickListener clickListener;
    private ItemsFilter filter;
    private DisplayImageOptions options;

    public CocktailsAdapter(ArrayList<Cocktail> cocktails){
        cocktailArrayList = cocktails;
        cocktailArrayListAux = cocktails;

        options = new DisplayImageOptions.Builder()
                .resetViewBeforeLoading(true)  // default
                .cacheInMemory(true)
                .cacheOnDisk(true)
                .showImageOnLoading(R.drawable.cocktail_placeholder)
                .build();
    }

    public void setClickListener(ItemClickListener itemClickListener) {
        this.clickListener = itemClickListener;
    }

    public Object getItem(int i) {
        return cocktailArrayList.get(i);
    }

    @Override
    public int getItemCount() {
        return cocktailArrayList.size();
    }

    @Override
    public void onAttachedToRecyclerView(RecyclerView recyclerView) {
        super.onAttachedToRecyclerView(recyclerView);
    }

    @NonNull
    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        CocktailViewHolder viewHolder = null;
        LayoutInflater inflater = LayoutInflater.from(parent.getContext());
        View view = inflater.inflate(R.layout.view_cocktail_item, parent, false);
        viewHolder = new CocktailViewHolder(view);
        return viewHolder;
    }

    @Override
    public void onBindViewHolder(@NonNull RecyclerView.ViewHolder holder, int position) {

        final Cocktail cocktail = (Cocktail) getItem(position);
        final CocktailViewHolder cocktailViewHolder = (CocktailViewHolder) holder;
        cocktailViewHolder.textviewCocktailName.setText(cocktail.getName());

        ImageLoader imageLoader = ImageLoader.getInstance();
        imageLoader.displayImage(cocktail.getPhotoUrl(), ((CocktailViewHolder) holder).cocktailImage, options);

        cleanExtraInformationInHolder(cocktailViewHolder);
        if (cocktail.getExtraInformation() ==  null){

            cocktailViewHolder.cocktail = cocktail;
            DataManager.getInstance().getCocktailDetail(cocktail.getCoacktailId(), new DataManagerCallback<ExtraInformation>() {
                @Override
                public void onResponse(ExtraInformation extraInformation) {
                    cocktail.setExtraInformation(extraInformation);

                    //Check to avoid previous callbacks. We fill the information only the current one
                    if (cocktailViewHolder.cocktail.getCoacktailId().equals(cocktail.getCoacktailId())) {
                        cocktailViewHolder.setExtraInformationInHolder(cocktail);
                    }
                }
                @Override
                public void onError(String error) {}
            });
        }
        else{
            cocktailViewHolder.setExtraInformationInHolder(cocktail);
        }
    }

    private void cleanExtraInformationInHolder(CocktailViewHolder viewHolder){

        viewHolder.textViewIngredient1.setVisibility(View.INVISIBLE);
        viewHolder.textViewIngredient2.setVisibility(View.INVISIBLE);
        viewHolder.textViewIngredientMore.setVisibility(View.INVISIBLE);
        viewHolder.textViewIngredient1.setText("");
        viewHolder.textViewIngredient2.setText("");
        viewHolder.textViewIngredientMore.setText("");
    }

    public class CocktailViewHolder extends RecyclerView.ViewHolder implements View.OnClickListener {

        Cocktail cocktail;
        @BindView(R.id.cocktail_name)
        public TextView textviewCocktailName;
        @BindView(R.id.cocktail_image)
        public ImageView cocktailImage;
        @BindView(R.id.textViewIngredient1)
        public TextView textViewIngredient1;
        @BindView(R.id.textViewIngredient2)
        public TextView textViewIngredient2;
        @BindView(R.id.textViewIngredientMore)
        public TextView textViewIngredientMore;

        public CocktailViewHolder(View view) {
            super(view);

            ButterKnife.bind(this, view);

            view.setTag(view);
            view.setOnClickListener(this);
        }

        private void setExtraInformationInHolder(Cocktail cocktail){

            this.cocktail = cocktail;
            //set extra data
            if (cocktail.getExtraInformation() != null) {
                if (cocktail.getExtraInformation().getIngredients().size() > 0) {
                    textViewIngredient1.setText(String.format("• %s", cocktail.getExtraInformation().getIngredients().get(0)));
                    textViewIngredient1.setVisibility(View.VISIBLE);
                }
                if (cocktail.getExtraInformation().getIngredients().size() > 1) {
                    textViewIngredient2.setText(String.format("• %s", cocktail.getExtraInformation().getIngredients().get(1)));
                    textViewIngredient2.setVisibility(View.VISIBLE);
                }
                if (cocktail.getExtraInformation().getIngredients().size() > 2) {
                    textViewIngredientMore.setText(String.format("and %d more ingredients", cocktail.getExtraInformation().getIngredients().size() - 2));
                    textViewIngredientMore.setVisibility(View.VISIBLE);
                }
            }
        }

        @Override
        public void onClick(View view) {
            if (clickListener != null) clickListener.onClick(cocktail);
        }
    }

    public interface ItemClickListener {
        void onClick(Cocktail selectedCocktail);
    }

    @Override
    public Filter getFilter() {
        if (filter == null) {
            filter = new ItemsFilter();
        }
        return filter;
    }

    private class ItemsFilter extends Filter {
        @Override
        protected void publishResults(CharSequence constraint, FilterResults results) {

            CocktailsAdapter.this.cocktailArrayList = (ArrayList<Cocktail>) results.values;
            notifyDataSetChanged();
        }

        @Override
        protected  FilterResults performFiltering(CharSequence constraint) {

            FilterResults results = new FilterResults();
            if (constraint!= null && constraint.toString().length() > 0) {

                ArrayList<Cocktail> filteredResults =  new ArrayList<>();

                for (Cocktail cocktail: cocktailArrayListAux) {
                    if (cocktail.getName().toUpperCase().contains(constraint.toString().toUpperCase())){
                        filteredResults.add(cocktail);
                    }
                }
                results.values = filteredResults;
                results.count = filteredResults.size();

            }
            else{

                results.values = cocktailArrayListAux;
                results.count = cocktailArrayListAux.size();
            }
            return results;
        }
    };
}
