import s from './category-header.module.scss'
import { FC } from 'react'
import CategoryHeaderItem from './category-header-item/CategoryHeaderItem'
import { ICategory } from '@/shared/interfaces/filter-options.interface'

const CategoryHeader: FC<{ categories: ICategory[] }> = ({ categories }) => {
	return (
		<ul className={s.list}>
			{categories.map(category => (
				<CategoryHeaderItem key={category.slug} category={category} />
			))}
		</ul>
	)
}

export default CategoryHeader
