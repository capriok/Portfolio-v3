import React, { useRef } from 'react'
import Image from 'next/image'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import styles from '../shared/styles/components/carousel.module.scss'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

interface Props {
	images: string[]
	set: SetViewState
}

const Carousel: React.FC<Props> = ({ images, set }) => {
	let ref: any = useRef()

	let isMobile
	if (typeof window !== `undefined`) {
		isMobile = window.innerWidth < 500
	}
	const handleOnDragStart = (e) => e.preventDefault()
	const responsive = { 0: { items: 1 }, 1024: { items: 2 } }

	return (
		<div className={styles.carouselCont}>
			<AliceCarousel
				ref={(el) => (ref = el)}
				mouseTracking={isMobile ? true : false}
				infinite={true}
				responsive={responsive}
				disableButtonsControls={true}
				disableDotsControls={true}
				items={images.map((image, i) => (
					<div
						key={i}
						className={styles.imageCont}
						onDragStart={handleOnDragStart}
						onClick={() => !isMobile && set({ open: true, image: i })}>
						<Image
							className={styles.image}
							src={image}
							alt={image}
							width={400}
							height={200} />
					</div>
				))}
			/>
			<div className={styles.controls}>
				<button onClick={() => ref.slidePrev()}>
					<MdChevronLeft />
				</button>
				<button onClick={() => ref.slideNext()} >
					<MdChevronRight />
				</button>
			</div>
		</div>
	)
}

export default Carousel
