package com.codechallenge.pcharras.cocktailscatalogue.networking;

import java.net.HttpURLConnection;
import java.net.URL;
import java.io.*;
import com.codechallenge.pcharras.cocktailscatalogue.constants.Constants;
import android.util.Log;

import static android.webkit.ConsoleMessage.MessageLevel.LOG;

/**
 * Created by mac on 12/5/18.
 */

public class BaseRequest {
    public static final String TAG = "BaseRequest";

    public static String executeGET(String strUrl) throws Exception
    {
        Log.i(TAG,strUrl);
        URL url = new URL(strUrl);
        HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();

        urlConnection.setConnectTimeout(Constants.kTIME_OUT);
        urlConnection.setReadTimeout(Constants.kTIME_OUT);
        urlConnection.setRequestProperty("Content-Type", "application/json");
        urlConnection.setRequestMethod("GET");

        String result = readInputStreamToString(urlConnection);
        urlConnection.disconnect();
        longInfo(result);
        return result;
    }

    private static String readInputStreamToString(HttpURLConnection connection) {

        String result = null;
        StringBuffer sb = new StringBuffer();
        InputStream is = null;

        try {
            is = new BufferedInputStream(connection.getInputStream());
            BufferedReader br = new BufferedReader(new InputStreamReader(is));
            String inputLine = "";
            while ((inputLine = br.readLine()) != null) {
                sb.append(inputLine);
            }
            result = sb.toString();
        }
        catch (Exception e) {
            Log.i(TAG, "Error reading InputStream");
            result = null;
        }
        finally {
            if (is != null) {
                try {
                    is.close();
                }
                catch (IOException e) {
                    Log.i(TAG, "Error closing InputStream");
                }
            }
        }

        return result;
    }

    public static void longInfo(String str) {
        if(str.length() > 4000) {
            Log.i(TAG, str.substring(0, 4000));
            longInfo(str.substring(4000));
        } else
            Log.i(TAG, str);
    }

}
