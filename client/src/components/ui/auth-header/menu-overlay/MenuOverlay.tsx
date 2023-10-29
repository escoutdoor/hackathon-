import { Dispatch, FC, SetStateAction } from 'react'

import s from './menu-overlay.module.scss'
import cn from 'clsx'
import { RxCross1 } from 'react-icons/rx'
import Button from '../../button/Button'
import { menuOverlayLinks } from '@/helpers/menu-overlay-links'
import PurpleLink from '../../purple-link/PurpleLink'

const MenuOverlay: FC<{
	active: boolean
	setActive: Dispatch<SetStateAction<boolean>>
}> = ({ active, setActive }) => {
	console.log(active)
	return (
		<div className={cn(s.menu, { [s.active]: active })}>
			<div className={s.sidebar}>
				<div className={s.container}>
					<div className={s.top}>
						<div className={s.cross} onClick={() => setActive(false)}>
							<RxCross1 />
						</div>
					</div>
					<div className={s.buttons}>
						<Button>Sign up</Button>
						<button className={s.login}>Login</button>
					</div>
				</div>
				<hr />
				<div className={s.container}>
					<div className={s.links}>
						{menuOverlayLinks.map(item => (
							<PurpleLink href={item.href}>{item.text}</PurpleLink>
						))}
					</div>
				</div>
			</div>
			<div className={s.overlay} onClick={() => setActive(false)} />
		</div>
	)
}
export default MenuOverlay
