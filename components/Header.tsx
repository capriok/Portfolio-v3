import React from "react"
import Link from "next/link"

import styles from '../styles/Components/Header.module.scss'

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
				<Link passHref href="/"><h1 className={styles.title}>KC</h1></Link>
				<div className={styles.navs}>
					<Link passHref href="/about"><span className={styles.mono}>About</span></Link>
					<Link passHref href="/work"><span className={styles.mono}>Work</span></Link>
					<Link passHref href="https://mail.google.com/mail/u/0/?fs=1&to=capriok7@gmail.com&su=Portfolio%20Inquiry&tf=cm" >
						<span><a className={styles.mono} target="_blank" rel="noreferrer">Contact</a></span>
					</Link>
					<Link passHref href="/resume"><span className={styles.mono}>Resume</span></Link>
				</div>
			</div>
		</header>
	)
}


export default Header
