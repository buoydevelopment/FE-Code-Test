package com.solarabehety.cocktailapp.ui.activities;

import android.support.v7.app.AppCompatActivity;

import io.reactivex.disposables.CompositeDisposable;
import io.reactivex.disposables.Disposable;
import rx.Subscription;
import rx.subscriptions.CompositeSubscription;

/**
 * Created by Sol Arabehety on 5/13/2018.
 */
public class BaseActivity  extends AppCompatActivity {
    private CompositeDisposable disposable = new CompositeDisposable();

    @Override
    public void onDestroy() {
        super.onDestroy();
        disposable.clear();
    }

     public void addDisposable(Disposable disposable) {
        this.disposable.add(disposable);
    }

}
