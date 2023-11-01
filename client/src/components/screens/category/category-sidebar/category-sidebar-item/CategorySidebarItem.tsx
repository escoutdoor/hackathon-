import s from './category-sidebar-item.module.scss'
import { FC, PropsWithChildren } from 'react'

interface ICategorySidebarItem {
	title: string
}

const CategorySidebarItem: FC<PropsWithChildren<ICategorySidebarItem>> = ({
	title,
	children,
}) => {
	return (
		<div className={s.item}>
			<h1 className={s.title}></h1>
			<main>{children}</main>
		</div>
	)
}

export default CategorySidebarItem
