import s from './carousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import CarouselButtons from './carousel-buttons/CarouselButtons'
import { FC } from 'react'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import CarouselItem from './carousel-item/CarouselItem'

const Carousel: FC<{ discounts: IDiscount[] }> = ({ discounts }) => {
	return (
		<div className={s.slider}>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				autoplay={{ delay: 10000, disableOnInteraction: false }}
				allowTouchMove={false}
				pagination={{ clickable: true }}
			>
				{discounts.map(item => (
					<SwiperSlide key={item.id}>
						<CarouselItem item={item} />
					</SwiperSlide>
				))}
				<CarouselButtons />
			</Swiper>
		</div>
	)
}
export default Carousel
