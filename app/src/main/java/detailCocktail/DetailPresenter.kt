package detailCocktail

import io.reactivex.android.schedulers.AndroidSchedulers
import io.reactivex.disposables.CompositeDisposable
import io.reactivex.rxkotlin.addTo
import io.reactivex.schedulers.Schedulers
import network.RetrofitSingleton

class DetailPresenter(private var presentation: CocktailDetailsPresentation?) {

    private val TAG:String = "DetailPresenter"
    private val compositeDisposable = CompositeDisposable()

    fun loadDrinkDetail(drinkId: String){
        presentation?.startLoading()
        RetrofitSingleton.service.getDetailDrink(drinkId)
                .subscribeOn(Schedulers.io())
                .observeOn(AndroidSchedulers.mainThread())
                .map { it.drinks }
                .doAfterTerminate {
                    presentation?.endLoading()
                }.subscribe ({
                    drinks ->
                    presentation?.showDetail(drinks.get(0)) //todo controll if have at least one element
                },
                        {
                            presentation?.showError("There was a problem loading the drinks. Try again")
                        }).addTo(compositeDisposable)
    }

    fun onDestroy(){
        compositeDisposable.dispose()
        presentation = null
    }

}