'use client'
import { Dispatch, FC, SetStateAction, useState } from 'react'

import s from './menu-overlay.module.scss'
import { RxCross1 } from 'react-icons/rx'
import Button from '../../button/Button'
import { menuOverlayLinks } from '@/helpers/menu-overlay-links'
import PurpleLink from '../../purple-link/PurpleLink'
import { useRouter } from 'next/navigation'

const MenuOverlay: FC<{
	active: boolean
	setActive: Dispatch<SetStateAction<boolean>>
}> = ({ active, setActive }) => {
	const { push } = useRouter()

	return (
		<div className={active ? `${s.menu} ${s.active}` : s.menu}>
			<div className={s.sidebar}>
				<div className={s.container}>
					<div className={s.top}>
						<div className={s.cross} onClick={() => setActive(false)}>
							<RxCross1 />
						</div>
					</div>
					<div className={s.buttons}>
						<Button
							onClick={() => {
								push('/auth?tab=register')
								setActive(false)
							}}
						>
							Sign up
						</Button>
						<button
							className={s.login}
							onClick={() => {
								push('/auth?tab=login')
								setActive(false)
							}}
						>
							Login
						</button>
					</div>
				</div>
				<hr />
				<div className={s.container}>
					<div className={s.links}>
						{menuOverlayLinks.map(item => (
							<PurpleLink key={item.id} href={item.href}>
								{item.text}
							</PurpleLink>
						))}
					</div>
				</div>
			</div>
			<div className={s.overlay} onClick={() => setActive(false)} />
		</div>
	)
}
export default MenuOverlay
