import { CategoryService } from '@/services/category/category.service'
import { useQuery } from '@tanstack/react-query'

export const useAllCategories = () => {
	const { data: categories, isLoading } = useQuery({
		queryKey: ['categories'],
		queryFn: async () => CategoryService.getAll(),
		select: ({ data }) => data,
	})

	return { categories, isLoading }
}
