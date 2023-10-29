import { IBrand } from '@/shared/interfaces/brand.interface'
import { FC } from 'react'

const Brand: FC<{ brand: IBrand; isLoading: boolean }> = ({
	brand,
	isLoading,
}) => {
	return <div>{brand?.name}</div>
}

export default Brand
