package detailCocktail

import android.content.Context
import android.os.Bundle
import android.os.PersistableBundle
import android.support.v7.app.AppCompatActivity
import android.util.Log
import com.example.devsar.cocktailapp.R
import com.example.devsar.cocktailapp.home.MainActivity.Companion.DETAIL_DRINK
import com.example.devsar.cocktailapp.home.model.Drink
import views.CocktailView

class DetailCocktailActivityetailCocktail : AppCompatActivity(), CocktailView {

    val TAG = "DetailCocktailActivity"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detail_drink)
        if(intent.hasExtra(DETAIL_DRINK)){
            Log.d(TAG, intent.getDoubleExtra(DETAIL_DRINK, 0.0).toString())
        }else{
            //TODO  show error
        }

    }

    override fun showError(error: String) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun showError(error: String, throwable: Throwable) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun getContext(): Context {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun showMoreInfo(drink: Drink) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun newItem(drink: Drink) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun showConnectionError() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun endLoading() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun startLoading() {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun updateDrinks(drinks: MutableList<Drink>?) {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

}