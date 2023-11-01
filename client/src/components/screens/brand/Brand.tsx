import s from './brand.module.scss'
import { FC } from 'react'
import { IBrand } from '@/shared/interfaces/brand.interface'
import BreadCrumbs from './bread-crumbs/BreadCrumbs'
import BrandCard from './brand-card/BrandCard'
import DiscountList from '@/components/ui/discount-list/DiscountList'

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
					{brand && (
						<h1 className={s.counter}>
							{brand?.discounts.length} Available{' '}
							{brand?.offerType.name}
						</h1>
					)}
					<DiscountList
						discounts={brand?.discounts || []}
						isLoading={isLoading}
						length={brand?.discounts?.length}
					/>
				</div>
			</div>
		</div>
	)
}

export default Brand
