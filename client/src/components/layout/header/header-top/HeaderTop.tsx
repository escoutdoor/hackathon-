'use client'
import s from './header-top.module.scss'
import { FC } from 'react'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import PurpleLink from '@/components/ui/purple-link/PurpleLink'
import Link from 'next/link'
import Button from '@/components/ui/button/Button'
import { useRouter } from 'next/navigation'

const HeaderTop: FC = () => {
	const { push } = useRouter()

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
				<PurpleLink href='/auth?tab=login'>Login</PurpleLink>
				<Button
					style={{
						width: '120px',
					}}
					onClick={() => push('/auth?tab=register')}
				>
					Register
				</Button>
			</div>
		</div>
	)
}
export default HeaderTop
