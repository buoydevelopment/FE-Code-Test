package detailCocktail

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import com.bumptech.glide.Glide
import com.bumptech.glide.request.RequestOptions
import com.example.devsar.cocktailapp.R
import com.example.devsar.cocktailapp.home.MainActivity.Companion.DETAIL_DRINK
import com.example.devsar.cocktailapp.home.model.DrinkDetail
import kotlinx.android.synthetic.main.activity_detail_drink.*
import kotlinx.android.synthetic.main.element_drink_list_info.view.*

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
    }

    override fun showError(error: String) {
        Toast.makeText(this,error,Toast.LENGTH_LONG).show()
    }

    override fun startLoading() {
       // TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun endLoading() {
        //TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}