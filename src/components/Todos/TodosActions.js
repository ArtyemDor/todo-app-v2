import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

import Button from '../UI/Button'

import styles from './TodosActions.module.css'

const TodosActions = ({
	resetTodo,
	deleteCompletedTodo,
	todosCompletedExist
}) => {
	return (
		<div className={styles.todosActionsContainers}>
			<Button title='delete Completed Todo' disabled={!todosCompletedExist}>
				<RiDeleteBin2Line onClick={deleteCompletedTodo} />
			</Button>
			<Button title='Clear All Todo'>
				<RiRefreshLine onClick={resetTodo} />
			</Button>
		</div>
	)
}

export default TodosActions
