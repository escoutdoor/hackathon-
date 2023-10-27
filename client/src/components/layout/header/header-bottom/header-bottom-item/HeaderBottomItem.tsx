import s from './header-bottom-item.module.scss'
import { IHeaderBottomItem } from '@/interfaces/header-bottom-item.interface'
import { FC } from 'react'
import PurpleLink from '@/components/ui/purple-link/PurpleLink'

const HeaderBottomItem: FC<{ item: IHeaderBottomItem }> = ({ item }) => {
	return (
		<li>
			<PurpleLink href={item.href}>{item.text}</PurpleLink>
		</li>
	)
}

export default HeaderBottomItem
