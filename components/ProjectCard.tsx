import React from 'react'
import Link from 'next/link'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import styles from '../styles/Components/ProjectCard.module.scss'

import { AiOutlineFolder, AiOutlineFolderOpen } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'

interface Props {
	project: Project
}

const ProjectCard: React.FC<Props> = ({ project }) => {
	return (
		<ScrollAnimation
			className={styles.cardAnimation}
			initiallyVisible={true}
			animateIn="pulse"
			animateOnce={true}
			duration={.5}>
			<div className={styles.card}>
				<div className={styles.head}>
					<div className={styles.folderClosed}><AiOutlineFolder /></div>
					<div className={styles.folderOpen}><AiOutlineFolderOpen /></div>
					<Link passHref href={`/${project.slug}`}><h3 className={styles.cardTitle}>{project.title}</h3></Link>
				</div>
				<div className={styles.description}>
					<p>{project.description}</p>
				</div>
				<div className={styles.foot}>
					<Link passHref href={`${project.source}`} ><a target="_blank" rel="noreferrer" ><AiFillGithub /></a></Link>
					<Link passHref href={`${project.demo}`} ><a target="_blank" rel="noreferrer" ><RiExternalLinkFill /></a></Link>
				</div>
			</div>
		</ScrollAnimation>
	)
}

export default ProjectCard
