package com.gvergara.buoytestcode.Service;

import java.util.List;

public interface DataFetcherCallback<T> {

    void onResponse(boolean successful, String error, String response);
}
