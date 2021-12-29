import React from 'react'
import { useRouter } from 'next/router'

import projectsJson from '../shared/jsons/projects.json'

import Layout from "../components/layouts/HomeLayout"
import ProjectView from '../components/Project-view'

const ProjectTemplate = () => {
	const router = useRouter()
	const { slug } = router.query

	const projects: Array<Project> = projectsJson
	const project = projects.find(p => p.slug === slug)

	return (
		<Layout>
			<ProjectView project={project!} />
		</Layout>
	)
}

export default ProjectTemplate