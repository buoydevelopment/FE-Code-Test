package com.gvergara.buoytestcode.Service;

public interface IDataFetcher {

    public void getDataFromUrl(String url, DataFetcherCallback callback);

}
