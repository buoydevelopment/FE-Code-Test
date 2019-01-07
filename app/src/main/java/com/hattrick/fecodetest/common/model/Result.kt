package com.hattrick.fecodetest.common.model

import com.google.gson.annotations.SerializedName

sealed class Result<T> {
    data class Success<T>(val body: T) : Result<T>()
    data class Error<T>(@SerializedName("error_code") val errorCode: Int = DEFAULT_ERROR, val description: String = DEFAULT_DESCRIPTION) : Result<T>() {
        companion object {
            const val DEFAULT_ERROR = -1
            const val DEFAULT_DESCRIPTION = "Unknown error"
        }
    }
}