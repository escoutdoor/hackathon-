'use client'
import Checkbox from '@/components/ui/checkbox/Chechbox'
import CategorySidebarItem from './category-sidebar-item/CategorySidebarItem'
import s from './category-sidebar.module.scss'
import { FC } from 'react'
import { useModifyParams } from '@/hooks/useModifyParams'
import { useSearchParams } from 'next/navigation'

interface ICategorySideBar {}

const CategorySidebar: FC<ICategorySideBar> = ({}) => {
	const { updateQueryParam } = useModifyParams()

	return (
		<div className={s.sidebar}>
			<h1 className={s.title}>Filters</h1>
			<CategorySidebarItem title="Online / Instore">
				<Checkbox
					title="Online"
					active={true}
					selectOption={() => {}}
				/>
			</CategorySidebarItem>
		</div>
	)
}

export default CategorySidebar
