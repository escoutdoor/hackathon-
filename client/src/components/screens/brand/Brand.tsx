import s from './brand.module.scss'
import { FC } from 'react'
import { IBrand } from '@/shared/interfaces/brand.interface'
import BreadCrumbs from './bread-crumbs/BreadCrumbs'
import BrandCard from './brand-card/BrandCard'
import DiscountCarousel from './discount-carousel/DiscountCarousel'
import DiscountSuggestions from './discount-suggestions/DiscountSuggestions'
import BlueTitle from '@/components/ui/heading/blue-title/BlueTitle'

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
					<BlueTitle
						style={{
							margin: '16px 0',
						}}
					>
						{brand?.discounts.length ?? ''} Available Student
						Discounts
					</BlueTitle>
					{brand && <DiscountCarousel discounts={brand.discounts} />}
					<div className={s.suggestions}>
						{brand && (
							<DiscountSuggestions
								brandId={brand.discounts[0].id}
								brandName={brand.name}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Brand
