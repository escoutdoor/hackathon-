import s from './category.module.scss'
import { FC } from 'react'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import { useAllCategories } from '@/hooks/useAllCategories'
import DiscountList from '@/components/ui/discount-list/DiscountList'
import CategoryHeader from './category-header/CategoryHeader'
import { useAllBrands } from '@/hooks/useAllBrands'
import SideBar from './sidebar/SideBar'
import { SideBarData } from '@/helpers/sidebar.data'

const Category: FC<{
	discounts: IDiscount[]
	length: number
	isLoading: boolean
}> = ({ discounts, isLoading, length }) => {
	const { categories } = useAllCategories()
	const { brands } = useAllBrands()

	return (
		<div className={s.category}>
			<div className="wrapper">
				<CategoryHeader categories={categories || []} />
				<div className={s.category__content}>
					<SideBar data={{ ...SideBarData, brands: brands || [] }} />
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
