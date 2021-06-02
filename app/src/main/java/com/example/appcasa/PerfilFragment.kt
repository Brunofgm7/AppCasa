package com.example.appcasa

import android.content.Context
import android.content.SharedPreferences
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.Toast
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class PerfilFragment : Fragment() {

    lateinit var botaoLogout: Button
    lateinit var loginFragment: LoginFragment

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val view = inflater.inflate(R.layout.fragment_perfil, container, false)

//        carregarPerfil()

        loginFragment = LoginFragment()
 
        botaoLogout = view.findViewById(R.id.botaoLogout)
        botaoLogout.setOnClickListener {
            val preferences: SharedPreferences = activity!!.getSharedPreferences("token",
                Context.MODE_PRIVATE
            )
            preferences.edit().remove("token").apply()
            requireActivity().supportFragmentManager
                .beginTransaction()
                .replace(R.id.frame_layout, loginFragment)
                .commit()
        }

        return view
    }

//    private fun carregarPerfil() {
//        val destinationService = ServiceBuilder.buildService(EndPointsService::class.java)
//        val requestCall = destinationService.getProfile(METER O SharedPreferences COM O EMAIL)
//
//        requestCall.enqueue(object: Callback<List<Item>> {
//
//            override fun onResponse(call: Call<List<Item>>, response: Response<List<Item>>) {
//                if (response.isSuccessful) {
//                    val item = response.body()
//                    if (item != null) {
//                        for (i in item) {
//                            TextNrRefeicoes.setText(i.numero)
//                            TextStock.setText(i.stock)
//                            TextNotas.setText(i.notas)
//                        }
//                    }
//                } else {
//                    Toast.makeText(activity, "Erro a carregar o item", Toast.LENGTH_SHORT).show()
//                }
//            }
//
//            override fun onFailure(call: Call<List<Item>>, t: Throwable) {
//                Toast.makeText(activity, "Erro a carregar o item: $t", Toast.LENGTH_SHORT).show()
//            }
//        })
//    }


}