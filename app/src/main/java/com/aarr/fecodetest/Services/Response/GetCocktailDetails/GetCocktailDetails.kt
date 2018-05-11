package com.aarr.fecodetest.Services.Response.GetCocktailDetails

import java.io.Serializable

/**
 * Created by andresrodriguez on 5/10/18.
 */
data class GetCocktailDetails(
        var drinks:List<DrinksDetails>?=null
):Serializable{
    constructor():this(
            emptyList()
    )
}