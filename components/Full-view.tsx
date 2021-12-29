import React, { useEffect } from 'react'
import Image from 'next/image'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

import styles from '@styles/components/full-view.module.scss'

interface Props {
	images: string[]
	view: ViewState
	set: SetViewState
}

const FullView: React.FC<Props> = ({ images, view, set }) => {
	const first = 0
	const last = images.length - 1
	let windowWidth
	if (typeof window !== `undefined`) {
		windowWidth = window.innerWidth < 500
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKey)
		return () => {
			window.removeEventListener('keydown', handleKey)
		}
	}, [])

	function handleKey(e: KeyboardEvent) {
		switch (e.key) {
			case 'ArrowLeft':
				prevImage()
				break;
			case 'ArrowRight':
				nextImage()
				break;
			case 'Escape':
				close()
				break;
			default:
				break;
		}
	}

	function prevImage() {
		set((v) => {
			return {
				open: true,
				image: v.image === first ? last : v.image - 1
			}
		})
	}

	function nextImage() {
		set((v) => {
			return {
				open: true,
				image: v.image === last ? first : v.image + 1
			}
		})
	}

	function close() {
		set(() => {
			return { open: false, image: 0 }
		})
	}

	return (
		<>
			{view.open &&
				<div className={styles.fullView}>
					{view.open && <div className={styles.viewClickout} onClick={() => close()} />}
					<Image
						className={styles.image}
						src={images[view.image]}
						alt={images[view.image]}
						width={1920}
						height={1005}
					/>

					<div className={styles.controls}>
						<button onClick={() => prevImage()}>
							<MdChevronLeft />
						</button>
						<button onClick={() => nextImage()}>
							<MdChevronRight />
						</button>
					</div>
				</div>
			}
		</>
	)
}

export default FullView
