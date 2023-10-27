'use client'
import s from './header-bottom.module.scss'
import { FC } from 'react'
import { headerBottomLinks } from '@/helpers/header-bottom-links.data'
import HeaderBottomItem from './header-bottom-item/HeaderBottomItem'

const HeaderBottom: FC = () => {
	return (
		<nav className={s.bottom}>
			<ul className={s.navbar}>
				{headerBottomLinks.map(item => (
					<HeaderBottomItem item={item} key={item.id} />
				))}
			</ul>
		</nav>
	)
}
export default HeaderBottom
