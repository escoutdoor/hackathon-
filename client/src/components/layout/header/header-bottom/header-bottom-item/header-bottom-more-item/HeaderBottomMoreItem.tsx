import s from './header-bottom-more-item.module.scss'
import { FC } from 'react'
import PurpleLink from '@/components/ui/purple-link/PurpleLink'
import { IHeaderBottomItem } from '@/interfaces/header-bottom-item.interface'

const HeaderBottomMoreItem: FC<{ item: IHeaderBottomItem }> = ({ item }) => {
	return (
		<li className={s.item}>
			<PurpleLink href={item.href}>{item.text}</PurpleLink>
		</li>
	)
}
export default HeaderBottomMoreItem
