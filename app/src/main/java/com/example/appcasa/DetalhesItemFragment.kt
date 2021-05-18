package com.example.appcasa

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.constraintlayout.widget.ConstraintLayout
import androidx.core.view.isVisible
import androidx.fragment.app.Fragment
import retrofit2.Call
import retrofit2.Callback
import retrofit2.Response

class DetalhesItemFragment : Fragment() {

    lateinit var TextNrRefeicoes: EditText
    lateinit var TextStock: EditText
    lateinit var TextNotas: EditText
    lateinit var botaoEditar: Button
    lateinit var botaoApagar: Button
    lateinit var layoutDetalhesItem: ConstraintLayout

    override fun onCreateView(inflater: LayoutInflater, container: ViewGroup?, savedInstanceState: Bundle?): View? {

        val view = inflater.inflate(R.layout.fragment_detalhes_item, container, false)

        val bundle = this.arguments
        if (bundle != null) {
            val itemId = bundle.get("itemId").toString()

            carregarItem(itemId)

            layoutDetalhesItem = view.findViewById(R.id.layoutDetalhesItem)

            val actionBar = (activity as AppCompatActivity).supportActionBar
            actionBar?.show()
            actionBar?.setHomeAsUpIndicator(R.drawable.back_button)
            actionBar?.setDisplayHomeAsUpEnabled(true)
            actionBar?.setBackgroundDrawable(null)

            val toolbar = (activity as AppCompatActivity).findViewById<androidx.appcompat.widget.Toolbar>(R.id.my_toolbar)
            val textViewNomeFragment = toolbar.findViewById<TextView>(R.id.textViewNomeFragment)
            textViewNomeFragment.isVisible = false

            //nome do restaurante
            val name = activity?.getSharedPreferences("restaurante", AppCompatActivity.MODE_PRIVATE)
                ?.getString("restaurante", null)

            //mudar background dependendo do restaurante
            when {
                name.toString() == "Terço" -> {
                    layoutDetalhesItem.setBackgroundResource(R.drawable.azulejo_blurred_mobile)
                }
                name.toString() == "Baixa" -> {
                    layoutDetalhesItem.setBackgroundResource(R.drawable.porto_blurred_mobile)
                }
                name.toString() == "Ju" -> {
                    layoutDetalhesItem.setBackgroundResource(R.drawable.hospital_blurred_mobile)
                }
            }

            TextNrRefeicoes = view.findViewById(R.id.TextNrRefeicoes)
            TextStock = view.findViewById(R.id.TextStock)
            TextNotas = view.findViewById(R.id.TextNotas)
            botaoEditar = view.findViewById(R.id.botaoEditar)
            botaoEditar.setOnClickListener {
                updateItem(itemId)
            }

            botaoApagar = view.findViewById(R.id.botaoApagar)
            botaoApagar.setOnClickListener {
                apagarItem(itemId)
            }
        }

        return view
    }

    private fun carregarItem(itemId: String) {

        val destinationService = ServiceBuilder.buildService(EndPointsService::class.java)
        val requestCall = destinationService.getItem(itemId)

        requestCall.enqueue(object: Callback<List<Item>> {

            override fun onResponse(call: Call<List<Item>>, response: Response<List<Item>>) {
                if (response.isSuccessful) {
                    val item = response.body()
                    if (item != null) {
                        for (i in item) {
                            TextNrRefeicoes.setText(i.numero)
                            TextStock.setText(i.stock)
                            TextNotas.setText(i.notas)
                        }
                    }
                } else {
                    Toast.makeText(activity, "Erro a carregar o item", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<List<Item>>, t: Throwable) {
                Toast.makeText(activity, "Erro a carregar o item: $t",Toast.LENGTH_SHORT).show()
            }
        })

    }

    private fun apagarItem(itemId: String){

        val endPointsService = ServiceBuilder.buildService(EndPointsService::class.java)
        val requestCall = endPointsService.deleteItem(itemId)

        requestCall.enqueue(object: Callback<Unit> {

            override fun onResponse(call: Call<Unit>, response: Response<Unit>) {
                if (response.isSuccessful) {
                    Toast.makeText(activity,"Item eliminado com sucesso", Toast.LENGTH_SHORT).show()
                    requireActivity().supportFragmentManager.popBackStack()

                } else {
                    Toast.makeText(activity,"Erro a apagar o item", Toast.LENGTH_SHORT).show()
                }
            }

            override fun onFailure(call: Call<Unit>, t: Throwable) {
                Toast.makeText(activity,"Erro a apagar o item: $t", Toast.LENGTH_SHORT).show()
            }
        })


    }

    private fun updateItem(itemId: String) {
        if(TextNrRefeicoes.text.toString() != ""){

            val endPointsService = ServiceBuilder.buildService(EndPointsService::class.java)

            val name = activity?.getSharedPreferences("restaurante", AppCompatActivity.MODE_PRIVATE)
                ?.getString("restaurante", null)

            val requestCall = endPointsService.updateItem(itemId, name.toString(),TextNrRefeicoes.text.toString(), TextStock.text.toString(), TextNotas.text.toString())

            requestCall.enqueue(object: Callback<AddItemResponse> {

                override fun onResponse(call: Call<AddItemResponse>, response: Response<AddItemResponse>) {
                    if (response.isSuccessful) {
                        Toast.makeText(activity,"Item editado com sucesso", Toast.LENGTH_SHORT).show()
                        requireActivity().supportFragmentManager.popBackStack()
                    } else {
                        Toast.makeText(activity,"Erro a editar o item", Toast.LENGTH_SHORT).show()
                    }
                }

                override fun onFailure(call: Call<AddItemResponse>, t: Throwable) {
                    Toast.makeText(activity,"Erro a editar o item: $t", Toast.LENGTH_SHORT).show()
                }
            })
        } else {
            Toast.makeText(activity, "Por favor preencha o número de refeições", Toast.LENGTH_SHORT).show()
        }
    }
}