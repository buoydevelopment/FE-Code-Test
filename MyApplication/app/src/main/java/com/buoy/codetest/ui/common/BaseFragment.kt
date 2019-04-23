package com.buoy.codetest.ui.common

import android.os.Bundle
import android.view.LayoutInflater
import android.view.MenuItem
import android.view.View
import android.view.ViewGroup
import androidx.appcompat.app.AppCompatActivity
import androidx.core.app.NavUtils
import androidx.fragment.app.Fragment
import androidx.navigation.fragment.findNavController
import kotlinx.android.synthetic.main.view_load_helper.*

abstract class BaseFragment: Fragment() {

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {
        return inflater.inflate(getLayoutResource(), container, false)
    }

    abstract fun getLayoutResource(): Int

    fun setToolbarTitle(title: String?, backButton: Boolean) {
        (activity as AppCompatActivity)?.let {
            it.supportActionBar?.title = title
            it.supportActionBar?.setHomeButtonEnabled(backButton)
            it.supportActionBar?.setDisplayHomeAsUpEnabled(backButton)
        }
    }

    override fun onOptionsItemSelected(item: MenuItem?): Boolean {
        when(item?.itemId) {
            android.R.id.home -> {
                activity?.let { it.onBackPressed() }
                return true
            }
        }

        return super.onOptionsItemSelected(item)

    }

}