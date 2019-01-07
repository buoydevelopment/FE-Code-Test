package com.hattrick.fecodetest.common.network

import retrofit2.HttpException
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import com.hattrick.fecodetest.common.model.Result
import com.hattrick.fecodetest.common.model.Result.Error

@Suppress("NULLABILITY_MISMATCH_BASED_ON_JAVA_ANNOTATIONS")
class ErrorMapper {

    companion object {

        fun <T> map(error: Any, retrofit: Retrofit): Result<T> {
            return if (error is HttpException) {
                val response = error.response()
                val converter =  GsonConverterFactory.create().responseBodyConverter(Error::class.java, emptyArray(), retrofit)
                return if (response.errorBody()?.string()?.isEmpty() == false) {
                    converter?.convert(response.errorBody()) as Error<T>
                } else {
                    Error()
                }
            } else {
                Error()
            }
        }
    }

}