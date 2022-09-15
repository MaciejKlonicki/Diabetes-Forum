package com.example.diabetesmobileapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.android.synthetic.main.activity_main.*
import kotlinx.android.synthetic.main.item_diabetesmobileapp.*

class MainActivity : AppCompatActivity() {

    private lateinit var todoAdapter: MobileAppAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        todoAdapter = MobileAppAdapter(mutableListOf())

        rvDiabetesMobileApp.adapter = todoAdapter
        rvDiabetesMobileApp.layoutManager = LinearLayoutManager(this)

        btnDiabetesMobileAppAdd.setOnClickListener {
            val todoTitle = etDiabetesMobileAppTitle.text.toString()
            if (todoTitle.isNotEmpty()) {
                val todo = DiabetesMobileApp(todoTitle)
                todoAdapter.addTodo(todo)
                etDiabetesMobileAppTitle.text.clear()
            }
        }
        btnDiabetesMobileAppDelete.setOnClickListener {
            todoAdapter.deleteDoneTodos()
        }
    }
}