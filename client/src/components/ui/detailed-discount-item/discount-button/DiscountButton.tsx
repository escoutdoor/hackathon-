import s from './discount-button.module.scss'
import { FC } from 'react'
import { useProfile } from '@/hooks/useProfile'
import { IDiscount } from '@/shared/interfaces/discount.interface'
import Button from '../../button/Button'

const DiscountButton: FC<{ item: IDiscount }> = ({ item }) => {
	const { profile } = useProfile()

	const handleClick = () => {
		console.log('handleClick')
	}

	return (
		<div className={s.container}>
			<Button onClick={handleClick}>Get Code</Button>
		</div>
	)
}

export default DiscountButton
