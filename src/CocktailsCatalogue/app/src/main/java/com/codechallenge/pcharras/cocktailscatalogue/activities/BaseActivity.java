package com.codechallenge.pcharras.cocktailscatalogue.activities;

import android.app.ActionBar;
import android.app.DialogFragment;
import android.app.ProgressDialog;
import android.content.Intent;
import android.net.Uri;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.view.View;
import android.widget.Toast;




public class BaseActivity extends AppCompatActivity{

    private static final String kSessionFragmentTag = "EXPIRED_SESSION";
    private static final String kUpdateFragmentTag = "UPDATE_APPLICATION";

    protected ProgressDialog mRingProgressDialog;

    public BaseActivity() {
        // TODO Auto-generated constructor stub
    }

    /*=========================================================================
     * ROBOSPICE METHODS METHODS
     * =======================================================================*/

    @Override
    protected void onStart() {
        super.onStart();
    }

    @Override
    protected void onStop() {
        if (mRingProgressDialog != null) mRingProgressDialog.dismiss();
        super.onStop();
    }

    /*=========================================================================
     * LOADERS METHODS
     * =======================================================================*/

    public void launchRingDialog(View view, String message) {

        mRingProgressDialog = ProgressDialog.show(BaseActivity.this, "", message, true);
        mRingProgressDialog.setCancelable(false);
        mRingProgressDialog.show();
    }


    public void showErrorMessage(String message){
        if (mRingProgressDialog != null) mRingProgressDialog.dismiss();
        Toast.makeText(BaseActivity.this,
                "Error: " + message, Toast.LENGTH_SHORT)
                .show();
    }


    /*=========================================================================
     * ACTION BAR
     * =======================================================================*/

    protected void setupActionBar() {
        ActionBar actionBar = this.getActionBar();
        if(actionBar == null)
        {
            return;
        }

        actionBar.setDisplayShowHomeEnabled(true);
        actionBar.setDisplayHomeAsUpEnabled(true);

    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                finish();
        }
        return true;
    }


    public ProgressDialog getmRingProgressDialog() {
        return mRingProgressDialog;
    }


}
