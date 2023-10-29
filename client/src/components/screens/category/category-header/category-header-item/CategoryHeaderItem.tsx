'use client'
import { useModifyParams } from '@/hooks/useModifyParams'
import s from './category-header-item.module.scss'
import { FC } from 'react'
import { ICategory } from '@/shared/interfaces/filter-options.interface'

const CategoryHeaderItem: FC<{ category: ICategory }> = ({ category }) => {
	const { updateQueryParam } = useModifyParams()

	const handleClick = () => {
		updateQueryParam('category', category.slug)
	}

	return (
		<li className={s.item} onClick={handleClick}>
			{category.name}
		</li>
	)
}

export default CategoryHeaderItem
