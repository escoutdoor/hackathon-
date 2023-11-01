'use client'
import Body from '@/components/layout/body/Body'
import s from './page.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import {MdOutlineMenu} from 'react-icons/md'

const page:React.FC = () => {
	
	return (
		<div className={s.page}>
			<div className={s.top}>
				<button>Student Beans</button>
				<Image
						width={172}
						height={36}
						src='https://cdn.studentbeans.com/static/web/assets/images/sb_dark_logo.svg'
						alt='logo'
					/>
				<MdOutlineMenu/>
			</div>
			<div className={s.navBlock}>
				<div className={s.navContent}>
					<h1 className={s.title}>Account Settings</h1>
					<nav className={s.menu}>
						<Link href={'./profile'}>
							<p>Profile</p>
						</Link>
						<Link href={'./password'}>
							<p>Password</p>
						</Link>
						<Link href={'./apps'}>
							<p>Apps</p>
						</Link>
					</nav>
				</div>
				<div className={s.buttonWrap}>
					<button>Delete Account</button>
				</div>
			</div>
			<div className={s.body}>
				<Body/>
			</div>
		</div>
	)
}
export default page;