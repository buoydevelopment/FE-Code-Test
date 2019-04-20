package com.buoy.codetest.ui.common

import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

open class BaseViewModel: ViewModel() {

    enum class State {
        LOADING,
        SUCCESS,
        ERROR
    }

    private val state = MutableLiveData<State>()
    fun getState(): LiveData<State> = state


    protected fun setState(state: State) {
        this.state.value = state
    }

}