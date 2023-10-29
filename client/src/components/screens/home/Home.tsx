'use client'
import { NextPage } from 'next'
import s from './home.module.scss'
import { FiSearch } from 'react-icons/fi'
import DiscountItem from '@/components/ui/discount-item/DiscountItem'
import Carousel from './carousel/Carousel'
import DiscountList from '@/components/ui/discount-list/DiscountList'
import { useFilteredDiscounts } from '@/hooks/useFilteredDiscounts'

const Home: NextPage = () => {
	const { discounts, isLoading } = useFilteredDiscounts({
		category: 'food-drink',
	})

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
			<div className="wrapper">
				<DiscountList discounts={discounts} isLoading={isLoading} />
				<Carousel />
			</div>
		</div>
	)
}

export default Home
