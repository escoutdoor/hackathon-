'use client'
import Image from 'next/image'
import s from './carousel-item.module.scss'
import { FC, useState } from 'react'
import Button from '@/components/ui/button/Button'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import { useDiscountCode } from '@/hooks/useDiscountCode'
import BlueTitle from '@/components/ui/heading/blue-title/BlueTitle'

const CarouselItem: FC<{ item: IDiscount }> = ({ item }) => {
	const [isLoading, setIsLoading] = useState(false)

	const { sendDiscountCode } = useDiscountCode({
		discountCode: item.discountCode,
		discountName: item.name,
		setIsLoading,
	})

	return (
		<div className={s.item}>
			<Image
				src={`/images/img/discounts/${item.image}`}
				width={0}
				height={0}
				sizes="100vw"
				alt={`discount image ${item.name}}`}
			/>
			<BlueTitle
				style={{
					margin: '32px 0 16px',
				}}
			>
				{item.name}
			</BlueTitle>
			<Button
				onClick={sendDiscountCode}
				style={{
					width: '120px',
				}}
			>
				Get Code
			</Button>
		</div>
	)
}

export default CarouselItem
