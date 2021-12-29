import React from 'react'

import projects from '@json/projects.json'

import Layout from "@components/layouts/HomeLayout"
import ProjectView from '@components/Project-view'

export async function getStaticPaths() {
	const paths = projects.map(p => {
		return { params: { slug: p.slug } }
	})
	return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
	const project = projects.find(p => p.slug === params.slug)
	return { props: { project } }
}

const ProjectTemplate: React.FC<{ project: Project }> = ({ project }) => {
	return (
		<Layout>
			<ProjectView project={project} />
		</Layout>
	)
}

export default ProjectTemplate