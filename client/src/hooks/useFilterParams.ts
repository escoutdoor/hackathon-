import { SortByValue } from '@/shared/interfaces/filter-options.interface'
import { useSearchParams } from 'next/navigation'

export const useFilterParams = () => {
	const { get, getAll } = useSearchParams()

	const filterParams = {
		query: get('q') || '',
		sortBy: (get('sortBy') as SortByValue) || 'popularity',
		brands: getAll('brands') || [],
		offerTypes: getAll('offer-types') || ['student-discount'],
	}

	return { ...filterParams }
}
