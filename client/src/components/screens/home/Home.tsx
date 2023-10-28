'use client'
import { NextPage } from 'next'
import s from './home.module.scss'
import { FiSearch } from 'react-icons/fi'
import DiscountItem from '@/components/ui/brand-item/BrandItem'
import Carousel from './carousel/Carousel'
import BrandList from '@/components/ui/brand-list/BrandList'
import { useFilteredBrands } from '@/hooks/useFilteredBrands'
import { FaChevronRight } from 'react-icons/fa'

const Home: NextPage = () => {
	// const { brands, isLoading } = useFilteredBrands({
	// 	categories: ['food-drink'],
	// })

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
				{/* <BrandList brands={brands} isLoading={isLoading} /> */}
				<Carousel />
				<div className={s.brandTitle}>
					<h2 className={s.text}>Recommended For You</h2>
					<div className={s.more}>
						<span className={s.text}>View More</span>
						<FaChevronRight />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
