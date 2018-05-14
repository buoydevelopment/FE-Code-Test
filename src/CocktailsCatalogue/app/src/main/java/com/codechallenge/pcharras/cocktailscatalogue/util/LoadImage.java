package com.codechallenge.pcharras.cocktailscatalogue.util;

import android.graphics.drawable.Drawable;
import android.os.AsyncTask;
import android.util.Log;
import android.widget.ImageView;

import java.io.InputStream;
import java.net.URL;

/**
 * Created by mac on 13/5/18.
 */

public class LoadImage extends AsyncTask<String, Integer, Drawable> {

    ImageView imageView;

    public LoadImage(ImageView imageView) {
        this.imageView = imageView;
    }

    @Override
    protected Drawable doInBackground(String... url) {

        try {
            InputStream is = (InputStream) new URL(url[0]).getContent();
            return Drawable.createFromStream(is, "image");

        } catch (Exception e) {
            Log.v("LoadImage","Exception: " + e);
            return null;
        }
    }

    @Override
    protected void onProgressUpdate(Integer... values) {

    }

    @Override
    protected void onPreExecute() {

    }

    @Override
    protected void onPostExecute(Drawable imageForm) {

        imageView.setImageDrawable(imageForm);
    }

    @Override
    protected void onCancelled() {
        Log.v("LoadImage","Task Cancelled");
    }
}
