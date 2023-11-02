'use client'
import SearchDiscount from '@/components/screens/search-discount/SearchDiscount'
import { useFilterParams } from '@/hooks/useFilterParams'
import { useFilteredDiscounts } from '@/hooks/useFilteredDiscounts'
import { useEffect } from 'react'

export default function SearchDiscountPage() {
	const { query } = useFilterParams()

	const { discounts, length, refetch, isLoading } = useFilteredDiscounts({
		searchTerm: query,
	})

	useEffect(() => {
		if (!isLoading) {
			refetch()
		}
	}, [query])

	console.log(discounts)

	return (
		<SearchDiscount
			discounts={discounts || []}
			length={length || 0}
			isLoading={isLoading}
		/>
	)
}
