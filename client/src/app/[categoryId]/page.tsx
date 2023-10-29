'use client'
import Category from '@/components/screens/category/Category'
import { useFilteredDiscounts } from '@/hooks/useFilteredDiscounts'
import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { TCategory } from '@/shared/interfaces/filter-options.interface'

export default function CategoryPage({
	params,
}: {
	params: { categoryId: string }
}) {
	const { discounts, length, refetch, isLoading } = useFilteredDiscounts({
		// offerTypes: ['student-discount'],
		// category: params.categoryId as TCategory,
		sortBy: 'popularity',
		limit: 40,
	})

	const searchParams = useSearchParams()

	useEffect(() => {
		refetch()
	}, [searchParams])

	console.log('discounts', discounts)

	return (
		<Category
			discounts={discounts || []}
			length={length as number}
			isLoading={isLoading}
		/>
	)
}
