import s from './discount-item-text.module.scss'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import { FC } from 'react'
import Link from 'next/link'

const DiscountItemText: FC<{ item: IDiscount }> = ({ item }) => {
	return (
		<div className={s.text}>
			<h1>{item.name}</h1>
			<span>Online at {item.brand.name}</span>
		</div>
	)
}

export default DiscountItemText
