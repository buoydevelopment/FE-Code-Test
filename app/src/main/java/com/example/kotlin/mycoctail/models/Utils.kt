package com.example.kotlin.mycoctail.models

import java.io.BufferedReader
import java.io.IOException
import java.io.InputStream
import java.io.InputStreamReader
import java.net.HttpURLConnection
import java.net.MalformedURLException
import java.net.URL

object Utils {

    fun getDataFromUrl(dataUrl:String):String?{

        try {
            val url=URL(dataUrl)
            val urlConnect = url.openConnection() as HttpURLConnection
            urlConnect.connectTimeout=500
            val dataJsonAsString=convertStreanToString(urlConnect.inputStream)
            return dataJsonAsString

        } catch (e: MalformedURLException) {
            e.printStackTrace()
        } catch (e: IOException) {
            e.printStackTrace()
        }

        return ""

    }


    fun convertStreanToString(inputStream:InputStream):String{
        val  bufferReader = BufferedReader(InputStreamReader(inputStream))
        var line:String
        var allstring:String=""

        try {
            do {
                line=bufferReader.readLine()
                if(line!=null)
                    allstring+=line
            }while (line!=null)
            bufferReader.close()
        }catch (ex:Exception){}


        return allstring
    }

}//class
