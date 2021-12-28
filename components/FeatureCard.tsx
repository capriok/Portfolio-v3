import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';

import styles from '../styles/Components/FeatureCard.module.scss'

import { AiFillGithub } from 'react-icons/ai'
import { RiExternalLinkFill } from 'react-icons/ri'

interface Props {
	project: Feature
	index: number
}

const FeaturedCard: React.FC<Props> = ({ project, index }) => {
	return (
		<ScrollAnimation
			className={styles.featureAnim}
			initiallyVisible={true}
			animateIn="pulse"
			animateOnce={true}
			duration={.5}>
			<div className={index !== 1 ? styles.featureCard : `${styles.featureCard} ${styles.inverted}`}>
				<div className={styles.thumbCont}>
					<div className={styles.imgCont}>
						<Link passHref href={`/${project.slug}`}><div className={styles.overlay}></div></Link>
						<Image src={project.thumb} alt={project.title} width={450} height={236} />
					</div>

				</div>
				<div className={styles.contentCont}>
					<Link passHref href={`/${project.slug}`}><h5 className={styles.mono}>Featured Project</h5></Link>
					<Link passHref href={`/${project.slug}`}><h2>{project.title}</h2></Link>
					<p className={styles.descriptionCont}>{project.description}</p>
					<div className={styles.tags}>
						{project.tags.map(t => (
							<span key={t} className={styles.mono}>{t}</span>
						))}
					</div>
					<div className={styles.navigation}>
						<a href={`${project.source}`} target="_blank" rel="noreferrer"><AiFillGithub /></a>
						<a href={`${project.demo}`} target="_blank" rel="noreferrer"><RiExternalLinkFill /></a>
					</div>
				</div>
			</div>
		</ScrollAnimation>
	)
}

export default FeaturedCard
