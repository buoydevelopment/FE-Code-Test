package com.example.kotlin.mycoctail.activities

import android.app.SearchManager
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.support.v7.app.AppCompatActivity
import android.support.v7.widget.SearchView
import android.util.Log
import android.view.Menu
import android.view.View
import android.widget.AbsListView
import android.widget.Button
import android.widget.LinearLayout
import android.widget.ListView
import com.example.kotlin.mycoctail.adapters.CompleteCoctailPrincipalListAdapter
import com.example.kotlin.mycoctail.models.Coctail
import com.example.kotlin.mycoctail.models.CoctailInformation
import com.example.kotlin.mycoctail.models.CoctailSerializer
import com.example.kotlin.mycoctail.models.CoctailSmallDetail
import com.google.gson.Gson
import com.example.kotlin.mycoctail.models.CoctailListSerializer
import android.widget.AdapterView.OnItemClickListener
import android.widget.TextView
import com.example.kotlin.mycoctail.R
import com.example.kotlin.mycoctail.asyncTasks.AsyncTaskIndividualCoctail
import com.example.kotlin.mycoctail.asyncTasks.AsysncTaskCoctailsList

import java.util.ArrayList

class MainActivity : AppCompatActivity() {

    private var completeCoctailListAdapter: CompleteCoctailPrincipalListAdapter? = null
    private var coctailList: ArrayList<CoctailSmallDetail>? = null
    private val coctails = ArrayList<Coctail>()
    private var coctailListSize: Int? = 0

    private var textView: TextView? = null
    private var lv_coctails: ListView? = null
    private var ll_loading: LinearLayout? = null
    private var ll_main: LinearLayout? = null
    private var main_layout_error: LinearLayout? = null

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        chargeView()
    }

    override fun onResume() {
        super.onResume()
        if (coctailList == null) {//to avoid duplicates
            fetchCoctailData()
        }
    }

    fun chargeView() {

        textView = findViewById(R.id.textView)
        ll_loading = findViewById(R.id.main_layout_loading)
        ll_main = findViewById(R.id.layout_main)

        main_layout_error = findViewById(R.id.main_layout_error)

        val bt_forceFetchCoctail = findViewById<Button>(R.id.main_button_tryAgain)
        bt_forceFetchCoctail.setOnClickListener { fetchCoctailData() }
    }

    fun fetchCoctailData() {
        try {
            val coctailReturnedData = AsysncTaskCoctailsList().execute().get()

            if (coctailReturnedData != null &&  coctailReturnedData != "" ) {
                val gson = Gson()
                val coctails = gson.fromJson<CoctailListSerializer>(coctailReturnedData, CoctailListSerializer::class.java)
                coctailList = coctails.drinks
                coctailListSize = coctailList!!.size

                initializeListView()
                loadMoreIndividualData(0)

                if (!ll_main!!.isShown) {
                    showViewData()
                }
            } else {
                showViewEmptyCoctails()
            }

        } catch (e: Exception) {
            print("ERROR-->" + e.toString())
        }

    }


    fun initializeListView() {

        lv_coctails = findViewById(R.id.listView_coctails)
        completeCoctailListAdapter = CompleteCoctailPrincipalListAdapter(this, coctails)
        lv_coctails!!.adapter = completeCoctailListAdapter

        lv_coctails!!.onItemClickListener = OnItemClickListener { adapter, view, position, id ->
            val coctailDetail = adapter.getItemAtPosition(position) as Coctail
            val i_showCoctail = Intent(this@MainActivity, CoctailDataActivity::class.java)
            i_showCoctail.putExtra("coctailId", coctailDetail.smallInformation.idDrink.toString())
            i_showCoctail.putExtra("coctailName", coctailDetail.smallInformation.strDrink)
            startActivity(i_showCoctail)
        }


        lv_coctails!!.setOnScrollListener(object : AbsListView.OnScrollListener {

            private var currentScrollState: Int = 0
            private var currentVisibleItemCount: Int = 0
            private var currentTotalItemCount: Int = 0

            override fun onScroll(view: AbsListView, firstVisibleItem: Int, visibleItemCount: Int, totalItemCount: Int) {
                this.currentVisibleItemCount = visibleItemCount
                this.currentTotalItemCount = totalItemCount
            }

            override fun onScrollStateChanged(view: AbsListView, scrollState: Int) {
                this.currentScrollState = scrollState
                this.isScrollCompleted()
            }

            private fun isScrollCompleted() {

                if (this.currentVisibleItemCount > 0 && this.currentScrollState == AbsListView.OnScrollListener.SCROLL_STATE_IDLE) {
                    if (lv_coctails!!.lastVisiblePosition == lv_coctails!!.adapter.count - 1 && lv_coctails!!.getChildAt(lv_coctails!!.childCount - 1).bottom <= lv_coctails!!.height) {

                        progressBarVisible()
                        val handler = Handler()
                        handler.postDelayed({ loadMoreIndividualData(currentTotalItemCount) }, 0)

                    }
                }
            }

        })
    }


    protected fun loadMoreIndividualData(itemNumber: Int?) {
        progressBarVisible()
        var coctailPrincipalInformation: CoctailInformation

        val maxNumber = if (itemNumber!! + MAX_DETAILS_FOR_FETCH > coctailListSize!!) coctailListSize else itemNumber + MAX_DETAILS_FOR_FETCH

        for (i in itemNumber until maxNumber!!) {

            val completeCoctail = Coctail()
            val smallCoctail = coctailList!![i]

            try {
                val coctailIndividualData = AsyncTaskIndividualCoctail().execute(smallCoctail.idDrink.toString()).get()

                if (coctailIndividualData != null && coctailIndividualData != "") {
                    val gson2 = Gson()
                    val coctail = gson2.fromJson(coctailIndividualData, CoctailSerializer::class.java)
                    coctailPrincipalInformation = coctail.drinks[0]

                    completeCoctail.smallInformation = smallCoctail
                    completeCoctail.completeInformation = coctailPrincipalInformation

                    coctails.add(completeCoctail)
                }

            } catch (e: Exception) {
            }

        }

        refreshListView()

        if (itemNumber == 0) {
            hideLoadingScreen()
        }
    }


    protected fun refreshListView() {

        var position = lv_coctails!!.firstVisiblePosition
        completeCoctailListAdapter!!.notifyDataSetChanged()
        lv_coctails!!.adapter = completeCoctailListAdapter
        lv_coctails!!.setSelection(position++)

        hidePogressBar()
    }


    fun showViewEmptyCoctails() {
        main_layout_error!!.visibility = View.VISIBLE
        ll_main!!.visibility = View.GONE
        ll_loading!!.visibility = View.GONE
    }

    fun showViewData() {
        main_layout_error!!.visibility = View.GONE
        ll_loading!!.visibility = View.GONE
        ll_main!!.visibility = View.VISIBLE
    }

    protected fun hidePogressBar() {
        textView!!.text = ""
    }

    protected fun progressBarVisible() {
        textView!!.text = "Loading..."
    }

    fun hideLoadingScreen() {
        ll_loading!!.visibility = View.GONE
    }


    override fun onCreateOptionsMenu(menu: Menu): Boolean {
        val inflater = menuInflater
        inflater.inflate(R.menu.main_activity_menu, menu)

        val searchManager = getSystemService(Context.SEARCH_SERVICE) as SearchManager

        val searchView = menu.findItem(R.id.action_search).actionView as SearchView

        searchView.setSearchableInfo(searchManager.getSearchableInfo(componentName))
        searchView.setIconifiedByDefault(false)
        searchView.setOnQueryTextListener(object : SearchView.OnQueryTextListener {
            override fun onQueryTextSubmit(query: String): Boolean {
                return false
            }

            override fun onQueryTextChange(newText: String): Boolean {
                completeCoctailListAdapter!!.filter.filter(newText)
                return false
            }
        })

        return true
    }

    companion object {
        internal val MAX_DETAILS_FOR_FETCH = 6
    }

}//class
