"use client"
import { useState, useEffect, use } from 'react'
interface Todo {
    title: string;
}
// API request from the compoment using client side rendering (rerenred on the client side)
export default function Todo() {
    const [todo, setTodo] = useState({ title: '' }) // provide a default value for todo
    useEffect(() => {
        async function fetchTodo() {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            const result: Todo = await response.json()
            setTodo(result)
        }
        fetchTodo()
    }, [])
    return (
        <div>
            <h1>Todo</h1>
            <h2>{todo.title}</h2>
        </div>
    );
}