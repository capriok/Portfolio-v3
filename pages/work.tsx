import React from 'react'
import Layout from '../components/Layouts/HomeLayout'
import ProjectMap from '../components/Sections/ProjectMap'
import SEO from '../components/Seo'

import styles from '../styles/Components/Work.module.scss'

const Work: React.FC = () => (
	<Layout>
		<SEO title="Work" />
		<div className={styles.workRoute}>
			<ProjectMap />
		</div>
	</Layout>
)

export default Work
