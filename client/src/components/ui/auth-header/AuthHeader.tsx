'use client'
import s from './auth-header.module.scss'

import { FC, useState } from 'react'
import { GrHomeRounded } from 'react-icons/gr'
import Link from 'next/link'
import Image from 'next/image'
import { FiMenu } from 'react-icons/fi'
import MenuOverlay from './menu-overlay/MenuOverlay'

const AuthHeader: FC = () => {
	const [activeMenu, setActiveMenu] = useState<boolean>(false)
	return (
		<div className={s.container}>
			<Link href={'/'} className={s.left}>
				<GrHomeRounded />

				<span>Return Home</span>
			</Link>
			<div className={s.middle}>
				<Image
					src="/images/logo/logo.png"
					width={240}
					height={75}
					alt=""
				/>
			</div>
			<div className={s.right} onClick={() => setActiveMenu(true)}>
				<FiMenu />
			</div>
			<MenuOverlay active={activeMenu} setActive={setActiveMenu} />
		</div>
	)
}
export default AuthHeader
