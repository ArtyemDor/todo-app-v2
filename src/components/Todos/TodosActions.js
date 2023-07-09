import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

import Button from '../UI/Button'

import styles from './TodosActions.module.css'

const TodosActions = ({ resetTodo, deleteCompletedTodo }) => {
	return (
		<div className={styles.todosActionsContainers}>
			<Button>
				<RiDeleteBin2Line onClick={deleteCompletedTodo} />
			</Button>
			<Button>
				<RiRefreshLine onClick={resetTodo} />
			</Button>
		</div>
	)
}

export default TodosActions
