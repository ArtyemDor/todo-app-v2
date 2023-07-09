import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import TodoForm from './components/Todos/TodoForm'
import TodoList from './components/Todos/TodoList'
import TodosActions from './components/Todos/TodosActions'

import './App.css'

function App() {
	const [todos, setTodos] = useState([])

	const addTodoHandler = text => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4()
		}

		setTodos([...todos, newTodo])
	}

	const deleteTodoHandler = id => {
		setTodos(todos.filter(todo => id !== todo.id))
	}
	const toggleTodoHandler = id => {
		setTodos(
			todos.map(todo =>
				todo.id === id
					? { ...todo, isCompleted: !todo.isCompleted }
					: { ...todo }
			)
		)
	}
	console.log('todos', todos)

	return (
		<div className='App'>
			<h1>Hello from react-app-v2</h1>
			<TodoForm addTodo={addTodoHandler} />
			<TodosActions />
			<TodoList
				todos={todos}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			/>
			{!todos.length > 0 && <h2>TodoList is empty</h2>}
		</div>
	)
}

export default App
