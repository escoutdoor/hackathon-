'use client'
import { NextPage } from 'next'
import s from './home.module.scss'
import { FiSearch } from 'react-icons/fi'
import Carousel from './carousel/Carousel'
import DiscountList from '@/components/ui/discount-list/DiscountList'
import { useFilteredDiscounts } from '@/hooks/useFilteredDiscounts'
import Modal from '@/components/layout/header/header-top/modal/Modal'
import { useState } from 'react'
import 'swiper/css'
const Home: NextPage = () => {
	const { discounts, isLoading, length } = useFilteredDiscounts({
		limit: 40,
	})
	const [isModalOpen, setIsModalOpen] = useState(false)
	const onModalCloseRequest = (): void => {
		setIsModalOpen(false)
	}

	return (
		<div className={s.home}>
			<div className={s.banner}>
				<div className={s.container}>
					<h1 className={s.title}>
						Making student life a little sweeter and a lot cheaper
					</h1>
					<div
						className={s.search}
						onClick={() => setIsModalOpen(true)}
					>
						<FiSearch />
						<p className={s.input}>Search Students Premium</p>
					</div>
				</div>
			</div>
			<div className="wrapper">
				{discounts?.length && <Carousel discounts={discounts} />}
				<DiscountList
					discounts={discounts}
					isLoading={isLoading}
					length={length as number}
				/>
			</div>
			<Modal isOpen={isModalOpen} onCloseRequest={onModalCloseRequest} />
		</div>
	)
}

export default Home
