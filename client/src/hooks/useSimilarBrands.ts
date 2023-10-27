import { BrandsService } from '@/services/brand/brand.service'
import { useQuery } from '@tanstack/react-query'

export const useSimilarBrands = (brandId: string) => {
	const {
		data: brands,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['similar-brands', brandId],
		queryFn: () => BrandsService.getSimilarById(brandId),
		select: ({ data }) => data,
		enabled: !!brandId,
	})

	return { brands, isLoading, error }
}
