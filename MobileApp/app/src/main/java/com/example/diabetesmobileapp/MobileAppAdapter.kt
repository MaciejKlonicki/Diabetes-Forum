package com.example.diabetesmobileapp

import android.graphics.Paint.STRIKE_THRU_TEXT_FLAG
import android.icu.text.CaseMap
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.item_diabetesmobileapp.view.*

class MobileAppAdapter (
    private val diabetes: MutableList<DiabetesMobileApp>
) : RecyclerView.Adapter<MobileAppAdapter.TodoViewHolder>() {
    class TodoViewHolder (itemView: View) : RecyclerView.ViewHolder(itemView)

    fun addTodo(todo: DiabetesMobileApp) {
        diabetes.add(todo)
        notifyItemInserted(diabetes.size -1)
    }

    fun deleteDoneTodos() {
        diabetes.removeAll {
            listToDo ->
            listToDo.check
        }
        notifyDataSetChanged()
    }

    private fun toggleStrikeThrough(tvTodoTitle: TextView, isChecked: Boolean) {
        if (isChecked) {
            tvTodoTitle.paintFlags = tvTodoTitle.paintFlags or STRIKE_THRU_TEXT_FLAG
        } else {
            tvTodoTitle.paintFlags = tvTodoTitle.paintFlags and STRIKE_THRU_TEXT_FLAG.inv()
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TodoViewHolder {
        return TodoViewHolder(
            LayoutInflater.from(parent.context).inflate(
                R.layout.item_diabetesmobileapp,
                parent,
                false
            )
        )
    }

    override fun onBindViewHolder(holder: TodoViewHolder, position: Int) {
        val curTodo = diabetes[position]
        holder.itemView.apply {
            tvDziennik.text = curTodo.myTitle
            cbDziennik.isChecked = curTodo.check
            toggleStrikeThrough(tvDziennik, curTodo.check)
            cbDziennik.setOnCheckedChangeListener { _, isChecked ->
                toggleStrikeThrough(tvDziennik, isChecked)
                curTodo.check = !curTodo.check
            }
        }
    }

    override fun getItemCount(): Int {
        return diabetes.size
    }
}