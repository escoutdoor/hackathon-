import s from './brand.module.scss'
import { FC } from 'react'
import { IBrand } from '@/shared/interfaces/brand.interface'
import BreadCrumbs from './bread-crumbs/BreadCrumbs'
import BrandCard from './brand-card/BrandCard'
import DiscountCarousel from './discount-carousel/DiscountCarousel'

const Brand: FC<{ brand: IBrand; isLoading: boolean }> = ({
	brand,
	isLoading,
}) => {
	return (
		<div className={s.brand}>
			<div className="wrapper">
				<div className={s.content}>
					<BreadCrumbs
						category={brand?.category}
						brandName={brand?.name}
					/>
					{brand && <BrandCard brand={brand} />}
					{brand && <DiscountCarousel discounts={brand.discounts} />}
				</div>
			</div>
		</div>
	)
}

export default Brand
