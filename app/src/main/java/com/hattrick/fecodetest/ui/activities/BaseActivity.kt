package com.hattrick.fecodetest.ui.activities

import android.view.View
import androidx.appcompat.app.AppCompatActivity
import kotlinx.android.synthetic.main.activity_home.*

open class BaseActivity : AppCompatActivity() {

    //region Loader
    fun showLoader() {
        loader.visibility = View.VISIBLE
    }

    fun hideLoader() {
        loader.visibility = View.GONE
    }
    //endregion

}
