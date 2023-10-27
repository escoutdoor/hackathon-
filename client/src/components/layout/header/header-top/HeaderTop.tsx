import s from './header-top.module.scss'
import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiSearch } from 'react-icons/fi'
import PurpleLink from '@/components/ui/purple-link/PurpleLink'

const HeaderTop: FC = () => {
	return (
		<div className={s.top}>
			<Image
				width={172}
				height={36}
				src="https://cdn.studentbeans.com/static/web/assets/images/sb_dark_logo.svg"
				alt="logo"
			/>
			<div className={s.search}>
				<FiSearch />
				<p className={s.input}>Search Student Beans</p>
			</div>
			<div className={s.auth}>
				<PurpleLink href="#">Login</PurpleLink>
				<button className={s.register}>Register</button>
			</div>
		</div>
	)
}
export default HeaderTop
