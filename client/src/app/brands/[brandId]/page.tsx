'use client'
import Brand from '@/components/screens/brand/Brand'
import { useBrand } from '@/hooks/useBrand'
import { IBrand } from '@/shared/interfaces/brand.interface'
import { useEffect } from 'react'

export default function BrandPage({ params }: { params: { brandId: string } }) {
	const { brand, isLoading, refetch } = useBrand(params.brandId)

	useEffect(() => {
		if (params.brandId) {
			refetch()
		}
	}, [params.brandId])

	return <Brand brand={brand as IBrand} isLoading={isLoading} />
}
