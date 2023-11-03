import { DiscountService } from '@/services/discount/discount.service'
import { useQuery } from '@tanstack/react-query'

export const useSimilarDiscounts = (discountId: string) => {
	const {
		data: discounts,
		isLoading,
		isError,
		isFetching,
	} = useQuery({
		queryKey: ['similar-discounts', discountId],
		queryFn: () => DiscountService.getSimilarById(discountId),
		select: ({ data }) => data,
		enabled: !!discountId,
	})

	return {
		discounts,
		isLoading,
		isError,
		isFetching,
	}
}
