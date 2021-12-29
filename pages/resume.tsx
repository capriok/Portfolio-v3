import React from 'react'
import Layout from '../components/layouts/ResumeLayout'

import styles from '../styles/components/resume.module.scss'

const PDF = process.env.NEXT_PUBLIC_RESUME

const Resume: React.FC = () => (
	<Layout>
		<div className={styles.resume}>
			<object
				data={PDF}
				type="application/pdf"
				width="100%"
				height="100%">
				Resume
			</object>
		</div>
		<div className={styles.resumeMobile}>
			<button className={styles.resumeBtn} onClick={() => window.open(PDF)}>
				View Resume
			</button>
		</div>
	</Layout>
)

export default Resume