package com.buoy.codetest.system.extentions

fun <T1: String, T2: String, R: Any> notEmptyStrings(p1: T1?, p2: T2?, block: (T1, T2)->R?): R? {
    return if (p1 != null && p1.isNotEmpty() && p2 != null && p2.isNotEmpty()) block(p1, p2) else null
}