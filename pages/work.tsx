import React from 'react'
import Layout from '../components/layouts/HomeLayout'
import ProjectMap from '../components/sections/Project-map'
import SEO from '../components/Seo'

import styles from '../shared/styles/components/work.module.scss'

const Work: React.FC = () => (
	<Layout>
		<SEO title="Work" />
		<div className={styles.workRoute}>
			<ProjectMap />
		</div>
	</Layout>
)

export default Work
