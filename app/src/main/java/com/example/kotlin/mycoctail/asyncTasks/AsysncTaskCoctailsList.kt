package com.example.kotlin.mycoctail.asyncTasks

import android.os.AsyncTask

import com.example.kotlin.mycoctail.models.Utils

class AsysncTaskCoctailsList : AsyncTask<String, String, String>() {

    override fun doInBackground(vararg params: String): String? {

        System.out.println("AsysncTaskCoctailsList")
        return Utils.getDataFromUrl("https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass")

    }

    override fun onPostExecute(result: String) {
        super.onPostExecute(result)
    }

}