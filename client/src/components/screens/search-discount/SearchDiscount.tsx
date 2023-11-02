import s from './search-discount.module.scss'
import { FC } from 'react'
import DiscountList from '@/components/ui/discount-list/DiscountList'
import { IDiscount } from '@/shared/interfaces/discount.interface'

interface ISearchDiscount {
	discounts: IDiscount[]
	length: number
	isLoading: boolean
}

const SearchDiscount: FC<ISearchDiscount> = ({
	discounts,
	length,
	isLoading,
}) => {
	return (
		<div className={s.search__discount}>
			<div className="wrapper">
				<div className={s.container}>
					{discounts.length > 0 && (
						<DiscountList
							discounts={discounts}
							length={length}
							isLoading={isLoading}
						/>
					)}
				</div>
			</div>
		</div>
	)
}

export default SearchDiscount
