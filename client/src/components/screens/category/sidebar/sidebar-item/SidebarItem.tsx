'use client'
import DropDownHeader from '@/components/ui/dropdown-header/DropDownHeader'
import { FC, PropsWithChildren, useState } from 'react'
import s from './sidebar-item.module.scss'

const SidebarItem: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title,
}) => {
	const [active, setActive] = useState(false)

	return (
		<div className={s.item}>
			<DropDownHeader
				active={active}
				setActive={setActive}
				title={title}
			/>
			<ul className={active ? `${s.list} ${s.active}` : s.list}>
				{children}
			</ul>
		</div>
	)
}

export default SidebarItem
