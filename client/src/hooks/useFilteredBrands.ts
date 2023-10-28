import { BrandsService } from '@/services/brand/brand.service'
import { IFilterOptions } from '@/shared/interfaces/filter-options.interface'
import { useQuery } from '@tanstack/react-query'

export const useFilteredBrands = (options: IFilterOptions) => {
	const { data, isLoading, error } = useQuery({
		queryKey: ['brands'],
		queryFn: async () => await BrandsService.getFilteredBrands(options),
		select: ({ data }) => data,
	})

	return {
		data,
		isLoading,
		error,
	}
}
