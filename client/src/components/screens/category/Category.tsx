import s from './category.module.scss'
import DiscountList from '@/components/ui/discount-list/DiscountList'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import { FC } from 'react'
import CategorySidebar from './category-sidebar/CategorySidebar'
import CategoryHeader from './category-header/CategoryHeader'
import { useAllCategories } from '@/hooks/useAllCategories'

const Category: FC<{
	discounts: IDiscount[]
	length: number
	isLoading: boolean
}> = ({ discounts, isLoading, length }) => {
	const { categories } = useAllCategories()

	return (
		<div className={s.category}>
			<div className="wrapper">
				<CategoryHeader categories={categories || []} />
				<div className={s.category__content}>
					<CategorySidebar />
					<DiscountList
						discounts={discounts}
						isLoading={isLoading}
						length={length}
					/>
				</div>
			</div>
		</div>
	)
}

export default Category
