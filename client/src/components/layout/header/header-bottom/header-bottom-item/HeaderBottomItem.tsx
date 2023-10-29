'use client'
import s from './header-bottom-item.module.scss'
import { IHeaderBottomItem } from '@/interfaces/header-bottom-item.interface'
import { FC } from 'react'
import PurpleLink from '@/components/ui/purple-link/PurpleLink'
import { FaChevronDown } from 'react-icons/fa'
import { headerBottomMoreLinks } from '@/helpers/header-bottom-links.data'
import HeaderBottomMoreItem from './header-bottom-more-item/HeaderBottomMoreItem'

const HeaderBottomItem: FC<{ item: IHeaderBottomItem }> = ({ item }) => {
	return (
		<li className={s.item}>
			{item.text === 'More' ? (
				<span className={s.more}>
					<div className={s.linkContainer}>
						<p className={s.link}>{item.text}</p>
						<FaChevronDown fontSize={12} className={s.moreIcon} />
					</div>
					<ul className={s.dropdown}>
						{headerBottomMoreLinks.map(item => (
							<HeaderBottomMoreItem key={item.id} item={item} />
						))}
					</ul>
				</span>
			) : (
				<PurpleLink href={`/${item.href}`}>{item.text}</PurpleLink>
			)}
		</li>
	)
}

export default HeaderBottomItem
