import React, { useState } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

import styles from '@styles/components/sections/skills.module.scss'

import {
	SiJavascript,
	SiTypescript,
	SiCsharp,
	SiJava,
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiSocketdotio,
	SiMysql,
	SiGraphql,
	SiMicrosoftsqlserver,
	SiMongodb,
	SiMariadbfoundation,
	SiAmazonaws,
	SiMicrosoftazure,
	SiGithub,
	SiNetlify,
	SiNpm,
	SiHeroku,
	SiVercel
} from 'react-icons/si';
import {
	DiSass,
	DiDotnet,
	DiPostgresql
} from 'react-icons/di';
import {
	RiGatsbyLine,
	RiHtml5Line,
	RiCss3Fill,
} from 'react-icons/ri';
import { VscDatabase } from 'react-icons/vsc';
import { GrMysql } from 'react-icons/gr';
import { FaPhp } from 'react-icons/fa'

const Skills: React.FC = () => {
	const [tab, setTab] = useState<object>({ b: true })

	const Tab = ({ children, t }) => (
		<li
			className={tab[t] ? styles.activeTab : ''}
			onClick={() => !Object.keys(tab).includes(t) && setTab({ [t]: true })}>
			{children}
		</li>
	)

	const Anim = ({ Icon, name }) => (
		<ScrollAnimation
			className={styles.projectAnim}
			initiallyVisible={true}
			animateIn="pulse"
			animateOnce={true}
			duration={.5}>
			<li>
				<p><Icon /></p>
				<p>{name}</p>
			</li>
		</ScrollAnimation>
	)

	const Icons = ({ children, t }) => (
		<>
			{tab[t] &&
				<section>
					<ul>
						{children}
					</ul>
				</section>
			}
		</>
	)

	return (
		<div className={styles.skillsSection}>
			<h1 className={styles.sectionTitle}>Technology</h1>
			<div className={styles.skillsCont}>
				<ul className={styles.tabs}>
					<Tab t="a"><span>Programming </span><span>Languages</span></Tab>
					<Tab t="b"><span>Front-end </span><span>Technologies</span></Tab>
					<Tab t="c"><span>Back-end </span><span>Technologies</span></Tab>
					<Tab t="d"><span>Database </span><span>Technologies</span></Tab>
					<Tab t="e"><span>Storage and</span><span>Deployment</span></Tab>
				</ul>
				<Icons t="a">
					<Anim Icon={SiJavascript} name="JavaScript" />
					<Anim Icon={SiTypescript} name="TypeScript" />
					<Anim Icon={SiCsharp} name="C Sharp" />
					<Anim Icon={SiJava} name="Java" />
					<Anim Icon={FaPhp} name="PHP" />
				</Icons>
				<Icons t="b">
					<Anim Icon={SiReact} name="React" />
					<Anim Icon={SiNextdotjs} name="Next" />
					<Anim Icon={RiGatsbyLine} name="Gatsby" />
					<Anim Icon={RiHtml5Line} name="HTML" />
					<Anim Icon={RiCss3Fill} name="CSS" />
					<Anim Icon={DiSass} name="SASS" />
				</Icons>
				<Icons t="c">
					<Anim Icon={DiDotnet} name="ASP.NET" />
					<Anim Icon={SiNodedotjs} name="Express.js" />
					<Anim Icon={GrMysql} name="SQL" />
					<Anim Icon={SiGraphql} name="GraphQL" />
					<Anim Icon={SiSocketdotio} name="Socket.io" />
				</Icons>
				<Icons t="d">
					<Anim Icon={SiMysql} name="MySQL" />
					<Anim Icon={DiPostgresql} name="PostgreSQL" />
					<Anim Icon={SiMicrosoftsqlserver} name="SQL Server" />
					<Anim Icon={SiMongodb} name="Mongo DB" />
					<Anim Icon={VscDatabase} name="NoSQL" />
					<Anim Icon={SiMariadbfoundation} name="Maria DB" />
				</Icons>
				<Icons t="e">
					<Anim Icon={SiAmazonaws} name="AWS" />
					<Anim Icon={SiMicrosoftazure} name="Azure" />
					<Anim Icon={SiGithub} name="Github" />
					<Anim Icon={SiNpm} name="NPM" />
					<Anim Icon={SiVercel} name="Vercel" />
					<Anim Icon={SiNetlify} name="Netlify" />
				</Icons>
			</div>
		</div>
	)
}

export default Skills