import s from './discount-list.module.scss'
import { FC } from 'react'
import DiscountItem from '../discount-item/DiscountItem'
import { IDiscount } from '@/shared/interfaces/discount.interface'

const DiscountList: FC<{
	discounts: IDiscount[] | undefined
	isLoading: boolean
	length: number
}> = ({ discounts, isLoading }) => {
	return (
		<ul className={s.list}>
			{discounts?.length &&
				discounts?.map(item => (
					<DiscountItem key={item.id} item={item} />
				))}
		</ul>
	)
}

export default DiscountList
