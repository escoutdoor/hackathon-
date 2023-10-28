import {
	EnumBrandSort,
	OfferType,
	TCategory,
} from '@/shared/interfaces/filter-options.interface'
import { useSearchParams } from 'next/navigation'

export const useGetFilterOptions = () => {
	const { get, getAll } = useSearchParams()

	const filterOptions = {
		searchTerm: get('q') || '',
		sortBy: (get('sortBy') as EnumBrandSort) || 'popularity',
		categories:
			(getAll('categories') as TCategory[]) || ([] as TCategory[]),
		brands: getAll('brands') || [],
		offerType: (getAll('type') as OfferType[]) || ['student-discount'],
	}

	return filterOptions
}
