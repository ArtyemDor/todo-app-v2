import Todo from './Todo'
import styles from './TodoList.module.css'

const TodoList = ({ todos, deleteTodo }) => {
  return (
    <div className={styles.todoListContainer}>
      {todos.map((todo, index) => (
        <Todo key={index} text={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  )
}

export default TodoList
