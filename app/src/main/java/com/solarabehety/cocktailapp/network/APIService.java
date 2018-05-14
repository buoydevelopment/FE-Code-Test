package com.solarabehety.cocktailapp.network;

import com.solarabehety.cocktailapp.model.Cocktail;

import java.util.List;

import io.reactivex.Completable;
import io.reactivex.Single;
import retrofit2.http.GET;
import retrofit2.http.Path;
import retrofit2.http.Query;

/**
 * Created by Sol Arabehety on 5/13/2018.
 */
public interface APIService {

    @GET("filter.php?g=Cocktail_glass")
    Single<List<Cocktail>> getCocktailList();


    @GET("lookup.php")
    Single<List<Cocktail>> getCocktailDetail(@Query("i") String idCocktail);
}
