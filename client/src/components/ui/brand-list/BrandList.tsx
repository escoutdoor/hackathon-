import { useFilteredBrands } from '@/hooks/useFilteredBrands'
import { FC } from 'react'

const BrandList: FC = () => {
	const { brands } = useFilteredBrands({
		categories: ['food-drink'],
	})

	console.log(brands)

	return <div>BrandList</div>
}

export default BrandList
