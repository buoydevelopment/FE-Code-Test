package com.kimboo.mvvmkotlin.model

/**
 * Created by Agustin Tomas Larghi on 28/5/2018.
 * Email: agustin.tomas.larghi@gmail.com
 */
import android.arch.persistence.room.Entity
import android.arch.persistence.room.Index
import android.arch.persistence.room.PrimaryKey
import android.os.Parcel
import android.os.Parcelable

@Entity(tableName = "cocktails",
        indices = [Index(value = ["name"], unique = false)])
data class Cocktail(
        @PrimaryKey
        val id: String,

        val name: String,

        val thumbnailUrl: String?,

        val videoUrl: String?,

        var category: String?,

        val iba: String?,

        var alcoholic: String?,

        var glass: String?,

        val instructions: String?,

        val ingredients: List<String>?,

        val measures: List<String>?,

        val dateModified: String?

      ) : Parcelable {

    constructor(parcel: Parcel) : this(
            parcel.readString(),
            parcel.readString(),
            parcel.readString(),
            parcel.readString(),
            parcel.readString(),
            parcel.readString(),
            parcel.readString(),
            parcel.readString(),
            parcel.readString(),
            parcel.createStringArrayList(),
            parcel.createStringArrayList(),
            parcel.readString()) {
    }

    fun getIngredientList(): String {
        val filterIngredients = ingredients?.filter { ingredient -> ingredient.isNotBlank() }
        val filterMeasures = measures?.filter { ingredient -> ingredient.isNotBlank() }
        return filterIngredients?.zip(filterMeasures!!, { ing, mes -> "$ing ($mes)"})
                ?.toTypedArray()
                ?.joinToString("\n")
                ?: ""
    }

    override fun writeToParcel(parcel: Parcel, flags: Int) {
        parcel.writeString(id)
        parcel.writeString(name)
        parcel.writeString(thumbnailUrl)
        parcel.writeString(videoUrl)
        parcel.writeString(category)
        parcel.writeString(iba)
        parcel.writeString(alcoholic)
        parcel.writeString(glass)
        parcel.writeString(instructions)
        parcel.writeStringList(ingredients)
        parcel.writeStringList(measures)
        parcel.writeString(dateModified)
    }

    override fun describeContents(): Int {
        return 0
    }

    companion object CREATOR : Parcelable.Creator<Cocktail> {
        override fun createFromParcel(parcel: Parcel): Cocktail {
            return Cocktail(parcel)
        }

        override fun newArray(size: Int): Array<Cocktail?> {
            return arrayOfNulls(size)
        }
    }

}