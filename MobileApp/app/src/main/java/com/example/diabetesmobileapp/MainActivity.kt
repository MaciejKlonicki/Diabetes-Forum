package com.example.diabetesmobileapp

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import androidx.recyclerview.widget.LinearLayoutManager
import kotlinx.android.synthetic.main.activity_main.*

class MainActivity : AppCompatActivity() {

    private lateinit var diabetesApp: MobileAppAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        diabetesApp = MobileAppAdapter(mutableListOf())

        rvDziennik.adapter = diabetesApp
        rvDziennik.layoutManager = LinearLayoutManager(this)

        btnDiabetesMobileAppAdd.setOnClickListener {
            val title = etDziennik.text.toString()
            if (title.isNotEmpty()) {
                val titleList = DiabetesMobileApp(title)
                diabetesApp.addTodo(titleList)
                etDziennik.text.clear()
            }
        }
        btnDiabetesMobileAppDelete.setOnClickListener {
            diabetesApp.deleteDoneTodos()
        }
    }
}