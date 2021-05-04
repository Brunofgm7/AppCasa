package com.example.appcasa

import android.app.Application
import android.content.Context
import android.content.SharedPreferences
import android.os.Bundle
import androidx.fragment.app.Fragment
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class AdicionarItemFragment : Fragment() {

    lateinit var editTextNrRefeicoes: EditText
    lateinit var editTextStock: EditText
    lateinit var editTextNotas: EditText
    lateinit var botaoSubmeter: Button

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val view = inflater.inflate(R.layout.fragment_adicionar_item, container, false)

        editTextNrRefeicoes = view.findViewById(R.id.editTextNrRefeicoes)
        editTextStock = view.findViewById(R.id.editTextStock)
        editTextNotas = view.findViewById(R.id.editTextNotas)

        botaoSubmeter = view.findViewById(R.id.botaoSubmeter)
        botaoSubmeter.setOnClickListener {
            val nrRefeicoes: String = editTextNrRefeicoes.text.toString()
            val stock: String = editTextStock.text.toString()
            val notas: String = editTextNotas.text.toString()
            adicionarItem(nrRefeicoes, stock, notas)
        }

        return view
    }

    private fun adicionarItem(nrRefeicoes: String, stock: String, notas: String) {
        if(nrRefeicoes.isNotEmpty()){

            val endPointsService = ServiceBuilder.buildService(EndPointsService::class.java)
            val name = activity?.getSharedPreferences("restaurante", AppCompatActivity.MODE_PRIVATE)
                ?.getString("restaurante", null)
            val requestCall = endPointsService.addItem(name.toString(), nrRefeicoes, stock, notas)

            requestCall.enqueue(object : Callback<AddItemResponse> {
                override fun onResponse(call: Call<AddItemResponse>, response: Response<AddItemResponse>) {
                    if (response.isSuccessful) {

                        val addItemResponse = response.body()
                        if (addItemResponse != null) {
                            if (!addItemResponse.getStatus()) { //status false
                                Toast.makeText(activity, "Ocorreu um erro a tentar adicionar o item", Toast.LENGTH_SHORT).show()
                            } else { //status true
                                Toast.makeText(activity, "Item adicionado com sucesso", Toast.LENGTH_SHORT).show()

                                requireActivity().supportFragmentManager.popBackStack()
                            }
                        }
                    } else {
                        Toast.makeText(activity, "Logged In Attempt Failed", Toast.LENGTH_SHORT).show()
                    }
                }

                override fun onFailure(call: Call<AddItemResponse>, t: Throwable) {
                    Toast.makeText(activity, "Erro$t", Toast.LENGTH_SHORT).show()
                }
            })

            } else {
            Toast.makeText(activity, "Por favor preencha o número de refeições", Toast.LENGTH_SHORT).show()
        }
    }

}