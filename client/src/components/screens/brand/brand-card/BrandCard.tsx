import s from './brand-card.module.scss'
import { FC } from 'react'
import { IBrand } from '@/shared/interfaces/brand.interface'
import Image from 'next/image'

const BrandCard: FC<{ brand: IBrand }> = ({ brand }) => {
	return (
		<div className={s.card}>
			<div className={s.preview}>
				<Image
					width={140}
					height={140}
					src={`/images/img/brands/${brand.image}`}
					alt={`brand image - ${brand.image}`}
				/>
			</div>

			<div className={s.text}>
				<h1 className={s.title}>{brand.name}</h1>
				<p className={s.description}>{brand.description}</p>
			</div>
		</div>
	)
}

export default BrandCard
