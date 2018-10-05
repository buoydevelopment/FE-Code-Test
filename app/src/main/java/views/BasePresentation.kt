package views

interface BasePresentation {
    fun showError(error: String)
    fun showConnectionError()
    fun endLoading()
    fun startLoading()
}