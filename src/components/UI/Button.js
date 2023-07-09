import styles from './Button.module.css'

const Button = ({ children, title, onClick, disabled = false }) => {
	return (
		<button
			onClick={onClick}
			className={styles.button}
			title={title}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
