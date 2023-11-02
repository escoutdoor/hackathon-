import s from './discount-list.module.scss'
import { FC } from 'react'
import DiscountItem from '../discount-item/DiscountItem'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import Image from 'next/image'
import NoResult from '../no-result/NoResult'

const DiscountList: FC<{
	discounts: IDiscount[] | undefined
	isLoading: boolean
	length: number
}> = ({ discounts, isLoading }) => {
	return (
		<>
			{discounts?.length ? (
				<ul className={s.list}>
					{discounts?.map(item => (
						<DiscountItem key={item.id} item={item} />
					))}
				</ul>
			) : (
				<NoResult message="No discounts found" />
			)}
		</>
	)
}

export default DiscountList
