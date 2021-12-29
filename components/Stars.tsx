import React from 'react'
import styles from '../shared/styles/Components/stars.module.scss'

const Stars: React.FC = () => (
	<div className={styles.starsCont}>
		<div className={styles.stars}>
			<div className={styles.small}></div>
			<div className={styles.medium}></div>
			<div className={styles.big}></div>
		</div>
	</div>
)

export default Stars
