'use client'
import Category from '@/components/screens/category/Category'
import { useFilteredDiscounts } from '@/hooks/useFilteredDiscounts'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import {
	CategorySlug,
	OfferTypeSlug,
} from '@/shared/interfaces/filter-options.interface'
import { useFilterParams } from '@/hooks/useFilterParams'

export default function CategoryPage({
	params,
}: {
	params: { categoryId: string }
}) {
	const { query, sortBy, offerTypes, brands } = useFilterParams()

	const { discounts, length, refetch, isLoading } = useFilteredDiscounts({
		offerTypes: offerTypes as OfferTypeSlug[],
		brands: brands,
		category: params.categoryId as CategorySlug,
		searchTerm: query,
		sortBy: sortBy || 'popularity',
		limit: 40,
	})

	const searchParams = useSearchParams()

	useEffect(() => {
		refetch()
	}, [searchParams])

	return (
		<Category
			discounts={discounts || []}
			length={length as number}
			isLoading={false}
		/>
	)
}
