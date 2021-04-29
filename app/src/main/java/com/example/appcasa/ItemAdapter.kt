package com.example.appcasa

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class ItemAdapter(val listaItem: List<Item>) : RecyclerView.Adapter<ItemAdapter.ExampleViewHolder>()  {

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ExampleViewHolder {
        val itemView = LayoutInflater.from(parent.context).inflate(R.layout.recyclerview_row, parent, false)

        return ExampleViewHolder(itemView)
    }

    override fun getItemCount(): Int = listaItem.size

    override fun onBindViewHolder(holder: ExampleViewHolder, position: Int) {
        val currentItem = listaItem[position]

        holder.textViewNome.text = "Bruno Moreira"
        holder.textViewNrRefeicoes.text = currentItem.numero.toString() + " refeições"
        holder.textViewStock.text = currentItem.stock

        //alterar para entrar no UPDATE item !!!!!!!!!!!!!!!!!!!!!!!!!!
//        holder.itemView.setOnClickListener{ v ->
//            val context = v.context
//            val intent = Intent(context, DetalhesCliente::class.java)
//            intent.putExtra(DetalhesCliente.ARG_ITEM_ID, currentCliente.id)
//            context.startActivity(intent)
//        }
    }

    class ExampleViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val textViewNome: TextView = itemView.findViewById(R.id.textViewFormulario)
        val textViewNrRefeicoes: TextView = itemView.findViewById(R.id.textViewNrRefeicoes)
        val textViewStock: TextView = itemView.findViewById(R.id.textViewStock)
    }
}