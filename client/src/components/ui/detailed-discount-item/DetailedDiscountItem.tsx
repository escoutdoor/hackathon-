'use client'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import { FC } from 'react'
import s from './detailed-discount-item.module.scss'
import Image from 'next/image'
import DetailedDiscountText from './detailed-discount-text/DetailedDiscountText'
import DiscountConditions from './discount-conditions/DiscountConditions'
import DiscountButton from './discount-button/DiscountButton'
import DiscountDescription from './discount-description/DiscountDescription'

const DetailedDiscountItem: FC<{ item: IDiscount }> = ({ item }) => {
	return (
		<li className={s.item}>
			<div className={s.container}>
				<Image
					src={`/images/img/discounts/${item.image}`}
					width={400}
					height={200}
					sizes="100vw"
					alt={`image ${item.name}`}
				/>
			</div>
			<DetailedDiscountText item={item} />
			<DiscountConditions conditions={item.conditions} />
			<DiscountButton item={item} />
			{item && <DiscountDescription description={item.description} />}
		</li>
	)
}

export default DetailedDiscountItem
