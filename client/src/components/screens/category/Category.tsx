import DiscountList from '@/components/ui/discount-list/DiscountList'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import { FC } from 'react'

const Category: FC<{
	discounts: IDiscount[]
	length: number
	isLoading: boolean
}> = ({ discounts, isLoading, length }) => {
	return <DiscountList discounts={discounts} isLoading={isLoading} />
}

export default Category
