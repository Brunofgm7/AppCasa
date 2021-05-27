package com.example.appcasa

import android.content.Context
import android.content.SharedPreferences
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button

class PerfilFragment : Fragment() {

    lateinit var botaoLogout: Button
    lateinit var loginFragment: LoginFragment

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val view = inflater.inflate(R.layout.fragment_perfil, container, false)

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


}