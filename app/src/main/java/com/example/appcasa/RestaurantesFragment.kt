package com.example.appcasa

import android.content.Context
import android.content.SharedPreferences
import android.media.Image
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.ImageView
import android.widget.RelativeLayout

class RestaurantesFragment : Fragment() {

    lateinit var botaoBaixaDoPorto: RelativeLayout
    lateinit var botaoTerco: Button
    lateinit var botaoHospital: Button
    lateinit var restBaixaFragment: RestBaixaFragment
    lateinit var restTercoFragment: RestTercoFragment
    lateinit var restHospitalFragment: RestJuFragment
    lateinit var botaoPerfil: Button

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val view = inflater.inflate(R.layout.fragment_restaurantes, container, false)

        restBaixaFragment = RestBaixaFragment()
        restTercoFragment = RestTercoFragment()
        restHospitalFragment = RestJuFragment()

        botaoBaixaDoPorto = view.findViewById(R.id.botaoBaixaDoPorto)
        botaoBaixaDoPorto.setOnClickListener {
            mudarFragment(restBaixaFragment)
        }

        botaoTerco = view.findViewById(R.id.botaoTerco)
        botaoTerco.setOnClickListener {
            mudarFragment(restTercoFragment)
        }

        botaoHospital = view.findViewById(R.id.botaoHospital)
        botaoHospital.setOnClickListener {
            mudarFragment(restHospitalFragment)
        }

        botaoPerfil = view.findViewById(R.id.botaoPerfil)
        botaoPerfil.setOnClickListener {

        }

        return view
    }

    private fun mudarFragment(fragment: Fragment) {
        requireActivity().supportFragmentManager
            .beginTransaction()
            .replace(R.id.frame_layout, fragment)
            .addToBackStack(null)
            .commit()
    }

}