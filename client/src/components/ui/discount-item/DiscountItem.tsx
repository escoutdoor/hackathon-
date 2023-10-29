'use client'
import s from './discount-item.module.scss'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import DiscountItemText from './discount-item-text/DiscountItemText'

const DiscountItem: FC<{ item: IDiscount }> = ({ item }) => {
	return (
		<li className={s.item}>
			<Link href={`/brands/${item.brand.id}`}>
				<Image
					src={`/images/img/discounts/${item.image}`}
					width={0}
					height={0}
					sizes="100vw"
					className={s.background}
					alt="background-image"
				/>
				<div className={s.logo__box}>
					<Image
						src={`/images/img/brands/${item.brand.image}`}
						width={0}
						height={0}
						sizes="100vw"
						className={s.logo}
						alt="logo"
					/>
				</div>
				<DiscountItemText item={item} />
			</Link>
		</li>
	)
}

export default DiscountItem
