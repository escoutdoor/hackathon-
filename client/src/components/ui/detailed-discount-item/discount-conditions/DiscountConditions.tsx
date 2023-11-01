'use client'
import BlueText from '../../blue-text/BlueText'
import DropDownHeader from '../../dropdown-header/DropDownHeader'
import s from './discount-conditions.module.scss'
import { FC, useState } from 'react'

const DiscountConditions: FC<{ conditions: string[] }> = ({ conditions }) => {
	const [active, setActive] = useState(false)

	return (
		<div className={s.conditions}>
			<DropDownHeader
				title="Conditions"
				active={active}
				setActive={setActive}
			/>
			<ul className={active ? `${s.list} ${s.active}` : s.list}>
				{conditions.map((condition, index) => (
					<li key={index}>
						<BlueText>{condition}</BlueText>
					</li>
				))}
			</ul>
		</div>
	)
}

export default DiscountConditions
