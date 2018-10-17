package com.example.kotlin.mycoctail.adapters

import android.content.Context
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.*
import com.example.kotlin.mycoctail.R
import com.example.kotlin.mycoctail.models.Coctail
import com.squareup.picasso.Picasso
import java.util.ArrayList


class CompleteCoctailPrincipalListAdapter(c: Context, private var data: ArrayList<Coctail>) : BaseAdapter(), Filterable {

    private var inflater: LayoutInflater? = null
    private var auxiliarContext : Context? = null
    private var originalDataAux: ArrayList<Coctail>? =  ArrayList<Coctail>()

    internal class ViewHolder {
        var tv_coctailName: TextView? = null
        var tv_coctailDescription: TextView? = null
        var tv_coctailAndMore: TextView? = null
        var iv_coctailPreviews: ImageView? = null
    }

    init {
        this.originalDataAux = data
        auxiliarContext=c
        inflater = LayoutInflater.from(c)
    }

    override fun getView(position: Int, convertView: View?, parent: ViewGroup): View {
        var convertView = convertView

        val holder: ViewHolder

        if (convertView == null) {

            convertView = inflater!!.inflate(R.layout.coctail_list_item, null)

            holder = ViewHolder()

            holder.tv_coctailName = convertView!!
                    .findViewById<View>(R.id.textView_coctailName) as TextView

            holder.tv_coctailDescription = convertView
                    .findViewById<View>(R.id.textView_coctailDetail) as TextView

            holder.tv_coctailAndMore = convertView
                    .findViewById<View>(R.id.textView_coctail_and_more) as TextView

            holder.iv_coctailPreviews = convertView.findViewById<View>(R.id.imageView_coctailPreview) as ImageView

            //Picasso.with(auxiliarContext).setIndicatorsEnabled(true)
            Picasso.with(auxiliarContext).load( data[position].smallInformation.strDrinkThumb).error( R.drawable.cocktail_error ).fit().placeholder( R.drawable.loading ).into( holder.iv_coctailPreviews);


            convertView.tag = holder

        } else {
            holder = convertView.tag as ViewHolder
        }

        holder.tv_coctailName!!.text = data[position].smallInformation.strDrink.toString()

        val coctailData = data[position]
        try {

            val ingredients = coctailData.completeInformation.getIngredient(1) + "\n" + coctailData.completeInformation.getIngredient(2)
            var ingredientsCount = 0
            for (i in 0..14) {
                ingredientsCount = ingredientsCount + if (coctailData.completeInformation.getIngredient(i) != null && coctailData.completeInformation.getIngredient(i) !== "") 1 else 0
            }

            holder.tv_coctailDescription!!.text = ingredients
            holder.tv_coctailAndMore!!.text = (if (ingredientsCount <= 2) "" else "and " + (ingredientsCount - 2) + " ingredients more")

        } catch (e: Exception) {

        }


        return convertView

    }

    override fun getCount(): Int {
        return data.size
    }

    override fun getItem(position: Int): Any {
        return data[position]
    }

    override fun getItemId(position: Int): Long {
        return position.toLong()
    }


    override fun getFilter(): Filter {

        return object : Filter() {

            override fun publishResults(constraint: CharSequence,
                                        results: FilterResults) {

                data = results.values as ArrayList<Coctail>
                notifyDataSetChanged()
            }

            override fun performFiltering(constraint: CharSequence?): FilterResults {

                val results = FilterResults()
                val FilteredArrayNames = ArrayList<Coctail>()

                if (originalDataAux == null) {
                    originalDataAux = ArrayList(data)
                }
                if (constraint == null || constraint.length == 0) {
                    results.count = originalDataAux!!.size
                    results.values = originalDataAux
                } else {
                    val searchStr = constraint.toString().toUpperCase()
                    for (o in originalDataAux!!) {
                        if (o.smallInformation.strDrink.toUpperCase().startsWith(searchStr)) {
                            FilteredArrayNames.add(o)
                        }
                    }
                    results.count = FilteredArrayNames.size
                    results.values = FilteredArrayNames
                }
                return results
            }
        }
    }


}
