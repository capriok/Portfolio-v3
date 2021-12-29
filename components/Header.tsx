import React from "react"
import Link from "next/link"

import styles from '../shared/styles/components/header.module.scss'

interface Props {
	dir?: string
	pos?: number
	atHome?: boolean
	isMobile?: boolean
}

const Header: React.FC<Props> = ({ dir, pos = 0, atHome, isMobile }) => {

	function headerClass(): string {
		const classes = {
			fill: ` ${styles.fill}`,
			hide: ` ${styles.hide}`,
			show: ` ${styles.show}`,
		}

		let cns = styles.homeHeader
		if (isMobile || pos >= 300) cns += classes.fill
		if (!atHome && pos > 0) cns += classes.fill

		switch (dir) {
			case 'down':
				cns += classes.hide
			case 'up':
				cns += classes.show
			case 'top':
				cns
			default:
				break;
		}
		return cns
	}

	return (
		<header className={headerClass()}>
			<div className={styles.headCont}>
				<Link passHref href="/"><a><h1 className={styles.title}>KC</h1></a></Link>
				<div className={styles.navs}>
					<Link passHref href="/about"><a><span className={styles.mono}>About</span></a></Link>
					<Link passHref href="/work"><a><span className={styles.mono}>Work</span></a></Link>
					<Link passHref href="https://mail.google.com/mail/u/0/?fs=1&to=capriok7@gmail.com&su=Portfolio%20Inquiry&tf=cm" >
						<a target="_blank" rel="noreferrer"><span className={styles.mono}>Contact</span></a>
					</Link>
					<Link passHref href="/resume"><a><span className={styles.mono}>Resume</span></a></Link>
				</div>
			</div>
		</header>
	)
}


export default Header
