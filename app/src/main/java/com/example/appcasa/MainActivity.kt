package com.example.appcasa

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.widget.ResourceCursorAdapter
import android.widget.Toast
import androidx.fragment.app.Fragment
import androidx.fragment.app.FragmentTransaction
import okhttp3.ResponseBody
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response
import java.io.IOException

class MainActivity : AppCompatActivity() {

    lateinit var LoginFragment: LoginFragment
    lateinit var RegistoFragment: RegistoFragment
    lateinit var LoggedInFragment: LoggedInFragment
    private var backPressedTime: Long = 0
    lateinit var backToast: Toast

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        LoggedInFragment = LoggedInFragment()
        LoginFragment = LoginFragment()
        verificarToken()

    }

    fun verificarToken() {

        val token = getSharedPreferences("token", MODE_PRIVATE).getString("token", null)

        if(token == "") {
            mudarFragment(LoginFragment)
        } else {

            val endPointsService = ServiceBuilder.buildService(EndPointsService::class.java)
            val requestCall = endPointsService.checkToken(token!!)

            requestCall.enqueue(object: Callback<ResponseBody> {
                override fun onResponse(call: Call<ResponseBody>, response: Response<ResponseBody>) {
                    if(response.isSuccessful) {
                        mudarFragment(LoggedInFragment)
                    } else {
                        mudarFragment(LoginFragment)
                    }
                }

                override fun onFailure(call: Call<ResponseBody>, t: Throwable) {
                    Toast.makeText(this@MainActivity,"Erro a verificar o token: $t", Toast.LENGTH_SHORT).show()
                }

            })

        }

    }

    private fun mudarFragment(fragment: Fragment) {
        supportFragmentManager
            .beginTransaction()
            .replace(R.id.frame_layout, fragment)
            .setTransition(FragmentTransaction.TRANSIT_FRAGMENT_OPEN)
            .commit()
    }

    override fun onBackPressed() {
        backToast = Toast.makeText(this, "Prima BACK novamente para sair.", Toast.LENGTH_SHORT)
        if (backPressedTime + 2000 > System.currentTimeMillis()) {
            backToast.cancel()
            super.onBackPressed()
            return
        } else {
            backToast.show()
        }
        backPressedTime = System.currentTimeMillis()
    }
}

