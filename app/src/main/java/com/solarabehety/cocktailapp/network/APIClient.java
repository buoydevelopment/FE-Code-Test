package com.solarabehety.cocktailapp.network;

import com.jakewharton.retrofit2.adapter.rxjava2.RxJava2CallAdapterFactory;
import com.solarabehety.cocktailapp.BuildConfig;

import okhttp3.OkHttpClient;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by Sol Arabehety on 5/13/2018.
 */
public class APIClient {
    private static final APIClient INSTANCE = new APIClient();
    private Retrofit retrofit;

    public static APIClient getInstance() {
        return INSTANCE;
    }


    private APIClient() {
        OkHttpClient client = new OkHttpClient.Builder()
                .addInterceptor(new APICocktailListResponseInterceptor())
                .build();

        retrofit = new Retrofit.Builder()
                .baseUrl(BuildConfig.BASE_URL)
                .client(client)
                .addCallAdapterFactory(RxJava2CallAdapterFactory.create())
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }

    public Retrofit getClient() {
        return retrofit;
    }

}
