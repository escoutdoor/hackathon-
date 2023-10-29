import s from './category.module.scss'
import DiscountList from '@/components/ui/discount-list/DiscountList'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import { FC } from 'react'
import CategorySidebar from './category-sidebar/CategorySidebar'
import CategoryHeader from './category-header/CategoryHeader'

const Category: FC<{
	discounts: IDiscount[]
	length: number
	isLoading: boolean
}> = ({ discounts, isLoading, length }) => {
	return (
		<div className={s.category}>
			<CategoryHeader />
			<main>
				<CategorySidebar />
				<div className={s.content}>
					<DiscountList
						discounts={discounts}
						isLoading={isLoading}
						length={length}
					/>
				</div>
			</main>
		</div>
	)
}

export default Category
