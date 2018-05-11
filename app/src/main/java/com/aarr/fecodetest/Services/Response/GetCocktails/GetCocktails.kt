package com.aarr.fecodetest.Services.Response.GetCocktails

import java.io.Serializable

/**
 * Created by andresrodriguez on 5/10/18.
 */
data class GetCocktails(
        var drinks: List<Drink>?= null
):Serializable{
    constructor():this(
            emptyList()
    )
}