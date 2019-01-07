package com.hattrick.fecodetest.model

import com.google.gson.annotations.SerializedName

class APIData<T> {
    @SerializedName("drinks")
    var data: T? = null
}