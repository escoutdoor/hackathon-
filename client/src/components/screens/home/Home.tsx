'use client'
import { NextPage } from 'next'
import s from './Home.module.scss'
import { FiSearch } from 'react-icons/fi'
import DiscountItem from '@/components/ui/discount-item/DiscountItem'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Carousel from './carousel/Carousel'

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
				{/* <DiscountItem /> */}
				<Carousel />
			</div>
		</div>
	)
}

export default Home
