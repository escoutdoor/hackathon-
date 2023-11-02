import s from './detailed-discount-text.module.scss'
import { FC } from 'react'
import { IDiscount } from '@/shared/interfaces/discount.interface'

const DetailedDiscountText: FC<{ item: IDiscount }> = ({ item }) => {
	return (
		<div className={s.text}>
			<h2 className={s.title}>{item.name}</h2>
			<p className={s.description}>Online at {item.brand.name}</p>
		</div>
	)
}

export default DetailedDiscountText
