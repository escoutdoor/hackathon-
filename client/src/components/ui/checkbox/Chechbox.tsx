import s from './checkbox.module.scss'
import { FC } from 'react'
import { BsCheckLg } from 'react-icons/bs'

interface ICheckbox {
	title: string
	selectOption: (title: string) => void
	active: boolean
}

const Checkbox: FC<ICheckbox> = ({ title, selectOption, active }) => {
	return (
		<li
			className={active ? `${s.item} ${s.active}` : s.item}
			onClick={() => selectOption(title)}
		>
			<div className={s.checkbox}>
				<input type="checkbox" />
				<span>
					<BsCheckLg />
				</span>
			</div>
			<span className={s.item__text}>{title}</span>
		</li>
	)
}

export default Checkbox
