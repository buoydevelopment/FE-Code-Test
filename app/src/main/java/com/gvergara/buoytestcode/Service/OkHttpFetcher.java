package com.gvergara.buoytestcode.Service;

import java.io.IOException;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

public class OkHttpFetcher implements IDataFetcher{

    private OkHttpClient client = new OkHttpClient();

    @Override
    public void getDataFromUrl(String url, final DataFetcherCallback callback) {


        Request request = new Request.Builder()
                .url(url)
                .get()
                .build();

        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onResponse(Call call, final Response response) throws IOException {
                if (response.code() == 200) {
                    String data = response.body().string();
                    callback.onResponse(true, null, data);
                }
                else{
                    //custom error handling by analysing body, etc
                    callback.onResponse(false, "Error code:"+ response.code(), null);
                }
            }

            @Override
            public void onFailure(Call call, final IOException e) {
                callback.onResponse(false, e.getMessage(), null);
            }
        });
    }
}
