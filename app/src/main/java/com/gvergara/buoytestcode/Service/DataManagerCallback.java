package com.gvergara.buoytestcode.Service;

public interface DataManagerCallback<T> {

    void onResponse(T result);
    void onError(String error);
}
