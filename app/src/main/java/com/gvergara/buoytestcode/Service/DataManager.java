package com.gvergara.buoytestcode.Service;

import android.content.Context;
import android.os.Handler;

import com.google.gson.Gson;
import com.gvergara.buoytestcode.Helper.ExtraInformationJsonHelper;
import com.gvergara.buoytestcode.Models.CocktailsSerializer;
import com.gvergara.buoytestcode.Models.ExtraInformation;

public class DataManager {

    private static final String URL_COCKTAILS = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass";
    private static final String URL_COCKTAIL_DETAIL = "http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

    private static DataManager instance;
    private IDataFetcher dataFetcher;
    private static Context context;

    private DataManager(){
        dataFetcher =  new OkHttpFetcher();
//        dataFetcher =  new RetrofitFetcher();
//        dataFetcher = new VolleyFetcher();
    }

    public static void init(Context ctx){
        context = ctx;
    }

    public static DataManager getInstance(){

        if (instance == null){
            instance = new DataManager();
        }
        return instance;
    }

    public void getCocktailList(final DataManagerCallback callback){

        DataFetcherCallback dataFetcherCallback = new DataFetcherCallback() {
            @Override
            public void onResponse(final boolean successful, final String error, final String response) {

                Handler mainHandler = new Handler(context.getMainLooper());
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {

                        if (successful){
                            CocktailsSerializer cocktailsSerializer = new Gson().fromJson(response, CocktailsSerializer.class);
                            callback.onResponse(cocktailsSerializer.getDrinks());
                        }
                        else{
                            callback.onError(error);
                        }
                    }
                });
            }
        };

        dataFetcher.getDataFromUrl(URL_COCKTAILS, dataFetcherCallback);
    }

    public void getCocktailDetail(String cocktailId, final DataManagerCallback callback){

        DataFetcherCallback dataFetcherCallback = new DataFetcherCallback() {
            @Override
            public void onResponse(final boolean successful, final String error, final String response) {

                Handler mainHandler = new Handler(context.getMainLooper());
                mainHandler.post(new Runnable() {
                    @Override
                    public void run() {

                        if (successful){
                            ExtraInformation extraInformation = new ExtraInformationJsonHelper().getFromJsonString(response);
                            callback.onResponse(extraInformation);
                        }
                        else{
                            callback.onError(error);
                        }
                    }
                });
            }
        };
        dataFetcher.getDataFromUrl(URL_COCKTAIL_DETAIL+cocktailId, dataFetcherCallback);
    }

}
