import { FC } from 'react'
import s from './DiscountItem.module.scss'
import Image from 'next/image'
import img from './../../../../public/images/default_image.jpg'
import img1 from './../../../../public/images/data.svg'
import Link from 'next/link'

const DiscountItem: FC = () => {
	return (
		<div className={s.item}>
			<div className={s.container}>
				<div className={s.background}>
					<Image width={313} height={130} src={img} alt='' />
					<div className={s.overlay}></div>
				</div>

				<div className={s.logoBlock}>
					<Image width={100} height={130} src={img1} alt='' />
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
