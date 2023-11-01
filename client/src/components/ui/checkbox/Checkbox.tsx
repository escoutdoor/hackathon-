import s from './checkbox.module.scss'
import { FC } from 'react'
import { BsCheckLg } from 'react-icons/bs'

interface ICheckbox {
	title: string
	onClick: () => void
	active: boolean
}

const Checkbox: FC<ICheckbox> = ({ title, onClick, active }) => {
	return (
		<li
			className={active ? `${s.option} ${s.active}` : s.option}
			onClick={onClick}
		>
			<div className={s.checkbox}>
				<input type="checkbox" />
				<span>
					<BsCheckLg />
				</span>
			</div>
			<span className={s.title}>{title}</span>
		</li>
	)
}

export default Checkbox
