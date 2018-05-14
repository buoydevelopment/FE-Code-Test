package com.solarabehety.cocktailapp.ui.activities;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.os.Handler;
import android.view.Window;
import android.view.WindowManager;

import com.solarabehety.cocktailapp.R;

public class LauncherActivity extends AppCompatActivity {
    private final int LAUNCHER_TIME = 500;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        getWindow().setFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN, WindowManager.LayoutParams.FLAG_FULLSCREEN);
        setContentView(R.layout.activity_launcher);

        new Handler().postDelayed(this::startMainActivity, LAUNCHER_TIME);

    }

    private void startMainActivity() {
        startActivity(new Intent(LauncherActivity.this, MainActivity.class));
        finish();
    }
}
