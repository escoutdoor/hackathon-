import Link from 'next/link';
import s from './nav-block.module.scss'


const NavBlock:React.FC = () => {
	return (
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
	)
}
export default NavBlock;