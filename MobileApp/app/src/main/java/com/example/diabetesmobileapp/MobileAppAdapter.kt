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
    private val todos: MutableList<DiabetesMobileApp>
) : RecyclerView.Adapter<MobileAppAdapter.TodoViewHolder>() {
    class TodoViewHolder (itemView: View) : RecyclerView.ViewHolder(itemView)

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TodoViewHolder {
        return TodoViewHolder(
            LayoutInflater.from(parent.context).inflate(
                R.layout.item_diabetesmobileapp,
                parent,
                false
            )
        )
    }

    fun addTodo(todo: DiabetesMobileApp) {
        todos.add(todo)
        notifyItemInserted(todos.size -1)
    }

    fun deleteDoneTodos() {
        todos.removeAll {
            todo ->
            todo.isChecked
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

    override fun onBindViewHolder(holder: TodoViewHolder, position: Int) {
        val curTodo = todos[position]
        holder.itemView.apply {
            tvDiabetesMobileApp.text = curTodo.title
            cbDiabetesMobileApp.isChecked = curTodo.isChecked
            toggleStrikeThrough(tvDiabetesMobileApp, curTodo.isChecked)
            cbDiabetesMobileApp.setOnCheckedChangeListener { _, isChecked ->
                toggleStrikeThrough(tvDiabetesMobileApp, isChecked)
                curTodo.isChecked = !curTodo.isChecked
            }
        }
    }

    override fun getItemCount(): Int {
        return todos.size
    }
}