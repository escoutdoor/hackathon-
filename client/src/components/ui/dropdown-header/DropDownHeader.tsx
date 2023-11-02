import s from './dropdown-header.module.scss'
import { FC } from 'react'
import { BiChevronDown } from 'react-icons/bi'

interface IDropDownHeader {
	title: string
	active: boolean
	setActive: (active: boolean) => void
}

const DropDownHeader: FC<IDropDownHeader> = ({ title, active, setActive }) => {
	return (
		<div className={s.header} onClick={() => setActive(!active)}>
			<h1 className={s.title}>{title}</h1>
			<BiChevronDown
				className={active ? `${s.icon} ${s.active}` : s.icon}
			/>
		</div>
	)
}

export default DropDownHeader
