package com.example.kotlin.mycoctail.asyncTasks

import android.os.AsyncTask

import com.example.kotlin.mycoctail.models.Utils

class AsyncTaskIndividualCoctail : AsyncTask<String, String, String>() {

    override fun doInBackground(vararg params: String): String? {
        val coctailIdReceived = params[0]
        System.out.println("AsyncTaskIndividualCoctail "+coctailIdReceived);
        return Utils.getDataFromUrl("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=$coctailIdReceived")

    }

    override fun onPostExecute(result: String) {
        super.onPostExecute(result)
    }

}