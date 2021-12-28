import React, { useState } from 'react'
import featuresData from '../../public/features.json'
import projectsData from '../../public/projects.json'

import { MdExpandMore, MdExpandLess } from 'react-icons/md'
import ProjectCard from '../ProjectCard'

import styles from '../../styles/Components/sections/ProjectMap.module.scss'

const ProjectMap = () => {
	const [pg, setPg] = useState<number>(6)

	let atHome
	if (typeof window !== `undefined`) {
		atHome = window.location.pathname === '/'
	}

	const features: Array<Feature> = featuresData
	const projects: Array<Project> = projectsData

	const slugs = features.map((f) => f.slug)

	let filteredProjects = [...projects].filter((p) => {
		if (!atHome) return p
		if (slugs.some(s => s === p.slug)) return
		return p
	})

	return (
		<div className={styles.projectMapSection}>
			<h1 className={styles.sectionTitle}>Project Collection</h1>
			<div className={styles.cardCont}>
				{filteredProjects.slice(0, atHome ? pg : filteredProjects.length).map((project, i) => (
					<ProjectCard key={i} project={project} />
				))}
			</div>
			{atHome &&
				<div className={styles.buttonCont}>
					{pg > 6 &&
						<button onClick={() => setPg(pg - 3)}>
							<MdExpandLess />
						</button>
					}
					{pg <= filteredProjects.length &&
						<button onClick={() => setPg(pg + 3)}>
							<MdExpandMore />
						</button>
					}
				</div>
			}
		</div>
	)
}

export default ProjectMap