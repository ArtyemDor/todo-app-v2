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

	const resetTodoHandler = () => {
		setTodos([])
	}

	const deleteCompletedTodoHandler = () => {
		setTodos(todos.filter(todo => !todo.isCompleted))
	}

	const completedTodosCount = todos.filter(todo => todo.isCompleted).length

	console.log('completedTodosCount', completedTodosCount)
	return (
		<div className='App'>
			<h1>Hello from react-app-v2</h1>
			<TodoForm addTodo={addTodoHandler} />
			{todos.length > 0 && (
				<TodosActions
					resetTodo={resetTodoHandler}
					deleteCompletedTodo={deleteCompletedTodoHandler}
					todosCompletedExist={!!completedTodosCount}
				/>
			)}
			<TodoList
				todos={todos}
				deleteTodo={deleteTodoHandler}
				toggleTodo={toggleTodoHandler}
			/>
			{!todos.length > 0 && <h2>TodoList is empty</h2>}
			{completedTodosCount > 0 && (
				<h2>{`You have completed ${completedTodosCount} ${
					completedTodosCount === 1 ? 'todo' : 'todos'
				}`}</h2>
			)}
		</div>
	)
}

export default App
