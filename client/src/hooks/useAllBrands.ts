import { BrandsService } from '@/services/brand/brand.service'
import { useQuery } from '@tanstack/react-query'

export const useAllBrands = () => {
	const {
		data: brands,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['brands'],
		queryFn: () => BrandsService.getAll(),
		select: ({ data }) => data.map(({ name }) => name),
	})

	return { brands, isLoading, isError }
}
