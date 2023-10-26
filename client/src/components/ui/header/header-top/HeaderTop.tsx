import { FC } from 'react'
import s from './HeaderTop.module.scss'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import Link from 'next/link'

const HeaderTop: FC = () => {
	return (
		<div className={s.top}>
			<Image
				width={172}
				height={36}
				src='https://cdn.studentbeans.com/static/web/assets/images/sb_dark_logo.svg'
				alt=''
			/>
			<div className={s.search}>
				<FiSearch fontSize={16} color={'#071f45'} />
				<p className={s.input}>Search Student Beans</p>
			</div>
			<div className={s.auth}>
				<Link href={'#'} className='link'>
					Login
				</Link>
				<button className={s.register}>Register</button>
			</div>
		</div>
	)
}
export default HeaderTop
