import { FC } from 'react'
import s from './brand-item.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { IBrand } from '@/shared/interfaces/brand.interface'

const BrandItem: FC<{ item: IBrand }> = ({ item }) => {
	return (
		<div className={s.item}>
			<div className={s.container}>
				<div className={s.background}>
					{/* <Image
						width={313}
						height={130}
						src={`/images/img/discounts/${item.discounts[0].image}`}
						alt="default_image"
					/> */}
					<div className={s.overlay}></div>
				</div>
				<div className={s.logoBlock}>
					<Image
						width={100}
						height={130}
						src={`/images/img/brands/${item.image}`}
						alt="data"
					/>
				</div>
				<span className={s.name}>{item.name}</span>
				<Link href={'#'} className={s.link}>
					Online at {item.name}
				</Link>
			</div>
		</div>
	)
}
export default BrandItem
