import s from './brand-list.module.scss'
import { IBrand } from '@/shared/interfaces/brand.interface'
import { FC } from 'react'
import BrandItem from '../brand-item/BrandItem'

const BrandList: FC<{ brands: IBrand[] | undefined; isLoading: boolean }> = ({
	brands,
	isLoading,
}) => {
	return (
		<>
			{brands?.length &&
				brands?.map(brand => <BrandItem key={brand.id} item={brand} />)}
		</>
	)
}

export default BrandList
