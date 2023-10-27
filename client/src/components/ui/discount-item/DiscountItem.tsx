import { FC } from 'react'
import s from './discounted-item.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const DiscountItem: FC = () => {
	return (
		<div className={s.item}>
			<div className={s.container}>
				<div className={s.background}>
					<Image
						width={313}
						height={130}
						src={'/images/img/default_image.jpg'}
						alt='default_image'
					/>
					<div className={s.overlay}></div>
				</div>

				<div className={s.logoBlock}>
					<Image
						width={100}
						height={130}
						src={'/images/img/data.svg'}
						alt='data'
					/>
				</div>
				<span className={s.name}>25% Student Discount</span>
				<Link href={'#'} className={s.link}>
					Online at Sephora
				</Link>
			</div>
		</div>
	)
}
export default DiscountItem
