import s from './header-top.module.scss'
import { FC } from 'react'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import PurpleLink from '@/components/ui/purple-link/PurpleLink'
import Link from 'next/link'

const HeaderTop: FC = () => {
	return (
		<div className={s.top}>
			<Link href={'/'}>
				<Image
					width={172}
					height={36}
					src='https://cdn.studentbeans.com/static/web/assets/images/sb_dark_logo.svg'
					alt='logo'
				/>
			</Link>

			<div className={s.search}>
				<FiSearch />
				<p className={s.input}>Search Student Beans</p>
			</div>
			<div className={s.auth}>
				<PurpleLink href='#'>Login</PurpleLink>
				<button className={s.register}>Register</button>
			</div>
		</div>
	)
}
export default HeaderTop
