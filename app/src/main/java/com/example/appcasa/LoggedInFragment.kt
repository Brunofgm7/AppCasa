package com.example.appcasa

import android.content.Context
import android.content.SharedPreferences
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.TextView

class LoggedInFragment : Fragment() {
    lateinit var textViewLoggedIn: TextView
    lateinit var botaoLogout: Button
    lateinit var loginFragment: LoginFragment

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val view = inflater.inflate(R.layout.fragment_logged_in, container, false)
        textViewLoggedIn = view.findViewById(R.id.textViewLoggedIn)
        botaoLogout = view.findViewById(R.id.botaoLogout)
        loginFragment = LoginFragment()

        textViewLoggedIn.text = "aa"

        botaoLogout.setOnClickListener {
            val preferences: SharedPreferences = requireActivity().getSharedPreferences("token", Context.MODE_PRIVATE)
            preferences.edit().putString("token", "").apply()

            mudarFragment(loginFragment)
        }



        return view
    }

    private fun mudarFragment(fragment: Fragment) {
        requireActivity().supportFragmentManager.beginTransaction()
            .replace(R.id.frame_layout, fragment)
            .addToBackStack(null)
            .commit()
    }

}