'use client'
import s from './discount-button.module.scss'
import { FC, useState } from 'react'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import { useDiscountCode } from '@/hooks/useDiscountCode'
import Button from '../../button/Button'

const DiscountButton: FC<{ item: IDiscount }> = ({ item }) => {
	const [isLoading, setIsLoading] = useState(false)

	const { sendDiscountCode } = useDiscountCode({
		discountName: item.name,
		discountCode: item.discountCode,
		setIsLoading,
	})

	return (
		<div className={s.container}>
			<Button onClick={sendDiscountCode}>Get Code</Button>
		</div>
	)
}

export default DiscountButton
