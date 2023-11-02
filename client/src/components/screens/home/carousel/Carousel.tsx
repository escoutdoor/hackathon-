
import s from './Carousel.module.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import Image from 'next/image'
import Button from '@/components/ui/button/Button'
import CarouselButtons from './carousel-buttons/CarouselButtons'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import { FC } from 'react'

const Carousel: FC = () => {
	return (
		<div className={s.slider}>
			<Swiper
				modules={[Navigation, Pagination, Autoplay]}
				autoplay={{ delay: 10000 }}
				allowTouchMove={false}
				pagination
				loop
			>
				<SwiperSlide>
					<div className={s.slide}>
						<Image src={'/images/img/data.svg'} width={50} height={50} alt='' />
						<span className={s.title}>15% of everything online 1</span>
						<Button
							style={{
								width: '120px',
							}}
						>
							Get Code
						</Button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={s.slide}>
						<Image src={'/images/img/data.svg'} width={50} height={50} alt='' />
						<span className={s.title}>15% of everything online 2</span>
						<Button
							style={{
								width: '120px',
							}}
						>
							Get Code
						</Button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={s.slide}>
						<Image src={'/images/img/data.svg'} width={50} height={50} alt='' />
						<span className={s.title}>15% of everything online 3</span>
						<Button
							style={{
								width: '120px',
							}}
						>
							Get Code
						</Button>
					</div>
				</SwiperSlide>
				<CarouselButtons />
			</Swiper>
		</div>
	)
}
export default Carousel
