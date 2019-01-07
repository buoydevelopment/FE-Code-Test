package com.hattrick.fecodetest.common.extensions

import com.jakewharton.rxrelay2.Relay
import io.reactivex.Flowable
import io.reactivex.Observable
import io.reactivex.Observer
import io.reactivex.disposables.CompositeDisposable
import io.reactivex.disposables.Disposable
import io.reactivex.functions.Consumer

fun Disposable.disposedBy(disposeBag: CompositeDisposable) {
    disposeBag.add(this)
}

fun <T> Observable<T>.bindTo(observer: Observer<T>): Disposable {
    return this.doOnNext { value : T ->
        observer.onNext(value)
    }.subscribe()
}

fun <T> Observable<T>.bindTo(relay: Relay<T>): Disposable {
    return this.doOnNext { value : T ->
        relay.accept(value)
    }.subscribe()
}

fun <T> Observable<T>.bindTo(consumer: Consumer<in T>): Disposable {
    return this.doOnNext { value : T ->
        consumer.accept(value)
    }.subscribe()
}

fun <T> Flowable<T>.bindTo(observer: Observer<T>): Disposable {
    return this.doOnNext { value : T ->
        observer.onNext(value)
    }.subscribe()
}

fun <T> Flowable<T>.bindTo(relay: Relay<T>): Disposable {
    return this.doOnNext { value : T ->
        relay.accept(value)
    }.subscribe()
}

fun <T> Flowable<T>.bindTo(consumer: Consumer<in T>): Disposable {
    return this.doOnNext { value : T ->
        consumer.accept(value)
    }.subscribe()
}