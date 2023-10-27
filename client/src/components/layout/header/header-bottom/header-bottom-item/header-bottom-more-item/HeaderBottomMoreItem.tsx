import PurpleLink from '@/components/ui/purple-link/PurpleLink'
import { IHeaderBottomItem } from '@/interfaces/header-bottom-item.interface'
import React, { FC } from 'react'
import s from './Header-bottom-more-item.module.scss'

const HeaderBottomMoreItem: FC<{ item: IHeaderBottomItem }> = ({ item }) => {
	return (
		<li className={s.item}>
			<PurpleLink href={item.href}>{item.text}</PurpleLink>
		</li>
	)
}
export default HeaderBottomMoreItem
