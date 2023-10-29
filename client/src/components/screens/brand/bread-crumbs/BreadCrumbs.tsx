import Link from 'next/link'
import s from './bread-crumbs.module.scss'
import { FC } from 'react'
import { GoHome } from 'react-icons/go'
import { ICategory } from '@/shared/interfaces/filter-options.interface'

interface IBreadCrumbs {
	category: ICategory
	brandName: string
}

const BreadCrumbs: FC<IBreadCrumbs> = ({ category, brandName }) => {
	return (
		<div className={s.bread__crumbs}>
			<Link href="/">
				<GoHome className={s.icon} />
			</Link>
			<span className={s.separator}>/</span>
			<Link href={`/${category?.slug}`} className={s.category__link}>
				{category?.name}
			</Link>
			<span className={s.separator}>/</span>
			<h1 className={s.brand__name}>{brandName}</h1>
		</div>
	)
}

export default BreadCrumbs
