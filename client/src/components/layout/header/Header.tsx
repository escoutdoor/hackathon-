import { FC } from 'react'
import s from './header.module.scss'
import HeaderTop from './header-top/HeaderTop'
import HeaderBottom from './header-bottom/HeaderBottom'

const Header: FC = () => {
	return (
		<header className={s.header}>
			<div className="wrapper">
				<HeaderTop />
				<HeaderBottom />
			</div>
		</header>
	)
}
export default Header
