import { FC } from 'react'
import s from './discount-item.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { IDiscount } from '@/shared/interfaces/discount.interface'

const DiscountItem: FC<{ item: IDiscount }> = ({ item }) => {
	return (
		<div className={s.item}>
			<div className={s.container}>
				<div className={s.background}>
					<Image
						width={313}
						height={130}
						src={`/images/img/discounts/${item.image}`}
						alt='default_image'
					/>
					<div className={s.overlay}></div>
				</div>

				<div className={s.logoBlock}>
					<Image
						width={100}
						height={130}
						src={`/images/img/brands/${item.brand.image}`}
						alt='data'
					/>
				</div>
				<span className={s.name}>{item.name}</span>
				<Link href={`/brands/${item.brand.id}`} className={s.link}>
					Online at {item.name}
				</Link>
			</div>
		</div>
	)
}
export default DiscountItem
