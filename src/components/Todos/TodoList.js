import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo }) => {
	return (
		<div className={styles.todoListContainer}>
			{todos.map(todo => (
				<Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
			))}
		</div>
	)
}

export default TodoList
