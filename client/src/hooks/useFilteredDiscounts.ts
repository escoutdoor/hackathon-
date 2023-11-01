import { BrandsService } from '@/services/brand/brand.service'
import { DiscountService } from '@/services/discount/discount.service'
import { IFilterOptions } from '@/shared/interfaces/filter-options.interface'
import { useQuery } from '@tanstack/react-query'

export const useFilteredDiscounts = (options: IFilterOptions) => {
	const { data, isLoading, error, refetch } = useQuery({
		queryKey: ['discounts'],
		queryFn: async () => await DiscountService.getAll(options),
		select: ({ data }) => data,
	})

	return {
		discounts: data?.discounts,
		length: data?.length,
		isLoading,
		error,
		refetch,
	}
}
