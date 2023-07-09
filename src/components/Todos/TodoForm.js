import { useState } from 'react'
import styles from './TodoForm.module.css'

const TodoForm = ({ addTodo }) => {
  const [textInInput, setTextInInput] = useState('')

  const submitTodoHandler = (e) => {
    e.preventDefault()
    addTodo(textInInput)
    setTextInInput('')
  }

  return (
    <div className={styles.todoFormContainer}>
      <form action="" onSubmit={submitTodoHandler}>
        <input
          type="text"
          placeholder="enter new todo"
          value={textInInput}
          onChange={(e) => setTextInInput(e.target.value)}
        />
        <button>send new todo</button>
      </form>
    </div>
  )
}

export default TodoForm
