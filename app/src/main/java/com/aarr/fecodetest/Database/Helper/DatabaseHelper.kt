package com.aarr.fecodetest.Database.Helper

import android.content.Context
import android.content.Intent
import android.database.sqlite.SQLiteDatabase
import android.net.Uri
import android.os.Environment
import android.util.Log

import com.aarr.fecodetest.Config.Configuration
import com.aarr.fecodetest.Database.Model.DrinksDetailsModel
import com.aarr.fecodetest.Database.Model.DrinksModel
import com.aarr.fecodetest.MainApplication
import com.j256.ormlite.android.apptools.OrmLiteSqliteOpenHelper
import com.j256.ormlite.dao.RuntimeExceptionDao
import com.j256.ormlite.support.ConnectionSource
import com.j256.ormlite.table.TableUtils

import java.io.File
import java.io.FileInputStream
import java.io.FileOutputStream
import java.io.IOException
import java.io.OutputStream
import java.sql.SQLException

/**
 * Created by andresrodriguez on 5/10/18.
 */
class DatabaseHelper(context: Context, path: String) : OrmLiteSqliteOpenHelper(context, path, null, DATABASE_VERSION) {

    private var mContext: Context? = null

    init {
        this.mContext = context
    }

    class DaoGet<T> {
        companion object {
            operator fun <T> get(clazz: Class<T>): RuntimeExceptionDao<T, Int> {
                return DatabaseHelper.helper.getRuntimeExceptionDao<RuntimeExceptionDao<T, Int>, T>(clazz)
            }
        }
    }

    override fun onCreate(database: SQLiteDatabase, connectionSource: ConnectionSource) {
        try {
            TableUtils.createTable(connectionSource, DrinksModel::class.java)
            TableUtils.createTable(connectionSource, DrinksDetailsModel::class.java)
        } catch (e: Exception) {
            e.printStackTrace()
        }

    }

    override fun onUpgrade(database: SQLiteDatabase, connectionSource: ConnectionSource, oldVersion: Int, newVersion: Int) {
        onCreate(database, connectionSource)
    }

    companion object {
        private val DATABASE_VERSION = 1
        private var mInstance: DatabaseHelper? = null

        val helper: DatabaseHelper
            get() {
                if (mInstance == null)
                    mInstance = DatabaseHelper(MainApplication.Companion.appContext!!, Configuration().dbName)
                return mInstance!!
            }
    }

    @Throws(IOException::class)
    fun BD_backup() {
        //        String timeStamp = new SimpleDateFormat("ddMMyyyy_HHmmss").format(new Date());

        val inFileName = Configuration().dbName
        val dbFile = File(inFileName)
        var fis: FileInputStream? = null

        fis = FileInputStream(dbFile)

        val directorio = Environment.getExternalStorageDirectory().toString() + "/Database"
        val d = File(directorio)
        if (!d.exists()) {
            d.mkdir()
        }
        val outFileName = directorio + "/" + "fecodetest.db"

        val output = FileOutputStream(outFileName)

        val buffer = ByteArray(1024)
        var length: Int = fis.read(buffer)
        while ((length) > 0) {
            output.write(buffer, 0, length)
        }

        output.flush()
        output.close()
        fis.close()

        sendDB(outFileName)

    }

    fun sendDB(zipLocation: String) {
        val itSend = Intent(Intent.ACTION_SEND)

        itSend.putExtra(Intent.EXTRA_EMAIL, arrayOf("andresdrgarcia@gmail.com"))
        itSend.putExtra(Intent.EXTRA_BCC, "")
        itSend.putExtra(Intent.EXTRA_SUBJECT, "Backup database")
        itSend.putExtra(Intent.EXTRA_TEXT, "Database backup")

        val dbFile = File(zipLocation)

        itSend.type = "text/plain"
        Log.d("_______________", "as " + Uri.fromFile(dbFile))
        itSend.putExtra(Intent.EXTRA_STREAM, Uri.fromFile(dbFile))

        mContext?.startActivity(Intent.createChooser(itSend, "Backup Database"))
    }

    fun sendDBString(text: String) {
        val itSend = Intent(Intent.ACTION_SEND)

        itSend.putExtra(Intent.EXTRA_EMAIL, arrayOf("andresdrgarcia@gmail.com"))
        itSend.putExtra(Intent.EXTRA_BCC, "")
        itSend.putExtra(Intent.EXTRA_SUBJECT, "Backup database")
        itSend.putExtra(Intent.EXTRA_TEXT, text)

        mContext?.startActivity(Intent.createChooser(itSend, "Backup Database"))
    }
}
