import { NextPage } from 'next'
import s from './Home.module.scss'
import { FiSearch } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import DiscountItem from '@/components/ui/discount-item/DiscountItem'
import 'swiper/css'

const Home: NextPage = () => {
	return (
		<div className={s.home}>
			<div className={s.banner}>
				<div className={s.container}>
					<h1 className={s.title}>
						Making student life a little sweeter and a lot cheaper
					</h1>
					<div className={s.search}>
						<FiSearch />
						<p className={s.input}>Search Student Beans</p>
					</div>
				</div>
			</div>
			<div className='wrapper'>
				<DiscountItem />
				<Swiper>
					{/* <SwiperSlide>Slide 1</SwiperSlide>
					<SwiperSlide>Slide 2</SwiperSlide>
					<SwiperSlide>Slide 3</SwiperSlide>
					<SwiperSlide>Slide 4</SwiperSlide> */}
					...
				</Swiper>
			</div>
		</div>
	)
}

export default Home
