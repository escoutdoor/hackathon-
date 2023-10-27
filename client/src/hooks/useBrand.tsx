import { BrandsService } from '@/services/brand/brand.service'
import { useQuery } from '@tanstack/react-query'

export const useBrand = (brandId: string) => {
	const {
		data: brand,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['brand', { brandId }],
		queryFn: () => BrandsService.brandById(brandId),
		select: ({ data }) => data,
		enabled: !!brandId,
	})

	return {
		brand,
		isLoading,
		error,
	}
}
