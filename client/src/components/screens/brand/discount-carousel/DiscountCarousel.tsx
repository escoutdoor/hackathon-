import s from './discount-carousel.module.scss'
import { FC } from 'react'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import { Swiper, SwiperSlide } from 'swiper/react'
import DetailedDiscountItem from '@/components/ui/detailed-discount-item/DetailedDiscountItem'

const DiscountCarousel: FC<{ discounts: IDiscount[] }> = ({ discounts }) => {
	return (
		<Swiper slidesPerView={3} spaceBetween={20}>
			{discounts.map(discount => (
				<SwiperSlide key={discount.id}>
					<DetailedDiscountItem item={discount} />
				</SwiperSlide>
			))}
		</Swiper>
	)
}

export default DiscountCarousel
