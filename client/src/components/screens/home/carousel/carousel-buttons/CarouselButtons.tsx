import { FC } from 'react'
import { useSwiper } from 'swiper/react'
import s from './Carousel-buttons.module.scss'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

const CarouselButtons: FC = () => {
	const swiper = useSwiper()
	return (
		<div className={s.buttons}>
			<button className={s.prev} onClick={() => swiper.slidePrev()}>
				<GoChevronLeft className={s.chevron} />
			</button>
			<button className={s.next} onClick={() => swiper.slideNext()}>
				<GoChevronRight className={s.chevron} />
			</button>
		</div>
	)
}
export default CarouselButtons
