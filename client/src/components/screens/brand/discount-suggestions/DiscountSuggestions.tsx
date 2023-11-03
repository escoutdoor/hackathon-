import DiscountList from '@/components/ui/discount-list/DiscountList'
import BlueTitle from '@/components/ui/heading/blue-title/BlueTitle'
import { useSimilarDiscounts } from '@/hooks/useSimilarDiscounts'
import { FC } from 'react'

const DiscountSuggestions: FC<{ brandId: string; brandName: string }> = ({
	brandId,
	brandName,
}) => {
	const { discounts, isLoading } = useSimilarDiscounts(brandId)

	console.log(discounts)

	return (
		<>
			<BlueTitle
				style={{
					margin: '16px 0',
				}}
			>
				We like your vibe! Here are similar discounts to {brandName}...
			</BlueTitle>
			<DiscountList
				discounts={discounts || []}
				isLoading={isLoading}
				length={24}
			/>
		</>
	)
}

export default DiscountSuggestions
