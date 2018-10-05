package detailCocktail

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import android.view.View
import android.widget.Toast
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.example.devsar.cocktailapp.R
import com.example.devsar.cocktailapp.home.MainActivity.Companion.DETAIL_DRINK
import com.example.devsar.cocktailapp.home.model.DrinkDetail
import kotlinx.android.synthetic.main.activity_detail_drink.*

class DetailCocktailActivity : AppCompatActivity(), CocktailDetailsPresentation {

    val TAG = "DetailCocktailActivity"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detail_drink)
        if(intent.hasExtra(DETAIL_DRINK)){
            DetailPresenter(this).loadDrinkDetail(intent.getStringExtra(DETAIL_DRINK))
        }else{
           showError("Something happened, please try again")
        }
    }

    override fun showDetail(drink: DrinkDetail) {

        Glide.with(this)
                .applyDefaultRequestOptions(RequestOptions.errorOf(R.drawable.test_drink_image))
                .load(drink.strDrinkThumb)
                .into(detailImage)
        //drinkImageDetail
        var ingredientText = ""
        drink.ingredients?.forEach {
            ingredient -> ingredient?.let {
                if(it.isNotEmpty() && it.isNotBlank())
                    ingredientText += "$it \n"
            }
        }
        detailIngredients.text = ingredientText

        detailInstructions.text = drink.strInstructions
    }

    override fun showError(error: String) {
        Toast.makeText(this,error,Toast.LENGTH_LONG).show()
    }

    override fun showConnectionError() {
        Toast.makeText(this,"Connection errors, please try again letter",Toast.LENGTH_LONG).show()
    }

    override fun startLoading() {
        detailProgressbar.visibility = View.VISIBLE
    }

    override fun endLoading() {
        detailProgressbar.visibility = View.GONE
    }

}