package com.solarabehety.cocktailapp.utils;

import android.content.Context;
import android.content.DialogInterface;
import android.support.v7.app.ActionBar;
import android.support.v7.app.AlertDialog;

import com.solarabehety.cocktailapp.R;

import io.reactivex.annotations.NonNull;

/**
 * Created by Sol Arabehety on 5/13/2018.
 */
public class Utils {

    public static void showSimpleAlert(Context context, Object messageId) {
        String message = "";

        if (messageId instanceof String)
            message = (String) messageId;
        else if (messageId instanceof Integer)
            message = context.getString((Integer) messageId);

        AlertDialog.Builder builder = new AlertDialog.Builder(context, android.R.style.Theme_Material_Light_Dialog_Alert);
        builder.setMessage(message)
                .setPositiveButton(R.string.action_accept, (dialog, which) -> dialog.dismiss())
                .show();
    }

    public static void initActionBar(ActionBar mActionBar) {
        mActionBar.setDisplayShowTitleEnabled(true);
        mActionBar.setHomeButtonEnabled(true);
        mActionBar.setDisplayHomeAsUpEnabled(true);

    }
}
