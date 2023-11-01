'use client'
import s from './category-header-item.module.scss'
import { FC } from 'react'
import { ICategory } from '@/shared/interfaces/filter-options.interface'
import { usePathname, useRouter } from 'next/navigation'

const CategoryHeaderItem: FC<{ category: ICategory }> = ({ category }) => {
	const { replace } = useRouter()
	const pathname = usePathname()

	const handleClick = () => {
		replace(`/${category.slug}`)
	}
	return (
		<li
			className={
				pathname === category.slug ? `${s.item} ${s.active}` : s.item
			}
			onClick={handleClick}
		>
			{category.name}
		</li>
	)
}

export default CategoryHeaderItem
