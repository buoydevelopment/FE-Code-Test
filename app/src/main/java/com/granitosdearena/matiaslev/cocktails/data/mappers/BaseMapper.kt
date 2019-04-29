package com.granitosdearena.matiaslev.cocktails.data.mappers

interface BaseMapper<E, D> {
    fun transform(input: E): D
}