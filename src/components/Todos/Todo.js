import { FaCheck } from 'react-icons/fa'
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'

import styles from './Todo.module.css'

const Todo = ({ todo, deleteTodo, toggleTodo }) => {
	return (
		<div
			className={`${styles.todo} ${
				todo.isCompleted ? styles.completedTodo : ''
			}`}
		>
			{/* <div className={styles.todo}> */}
			<RiTodoFill className={styles.todoIcon} />
			<div className={styles.todoText}>{todo.text}</div>
			<FaCheck
				className={styles.checkIcon}
				onClick={() => toggleTodo(todo.id)}
			/>
			<RiDeleteBin2Line
				className={styles.deleteIcon}
				onClick={() => deleteTodo(todo.id)}
			/>
		</div>
	)
}

export default Todo
