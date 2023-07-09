import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'

import Button from '../UI/Button'

import styles from './TodosActions.module.css'

const TodosActions = () => {
	return (
		<div className={styles.todosActionsContainers}>
			<Button>
				<RiDeleteBin2Line />
			</Button>
			<Button>
				<RiRefreshLine />
			</Button>
		</div>
	)
}

export default TodosActions
