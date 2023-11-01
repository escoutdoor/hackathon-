import s from './discount-description.module.scss'
import { FC } from 'react'
import BlueText from '../../blue-text/BlueText'

const DiscountDescription: FC<{ description: string[] }> = ({
	description,
}) => {
	return (
		<div className={s.block}>
			<h1 className={s.title}>How to redeem</h1>
			<ul className={s.list}>
				{description.map((item, index) => (
					<li key={index} className={s.item}>
						<BlueText>{item}</BlueText>
					</li>
				))}
			</ul>
		</div>
	)
}

export default DiscountDescription
