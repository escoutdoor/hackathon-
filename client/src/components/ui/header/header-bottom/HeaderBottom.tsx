import Link from 'next/link'
import { FC } from 'react'
import s from './HeaderBottom.module.scss'
import { headerBottomLinks } from '@/helpers/header-bottom-links.data'

const HeaderBottom: FC = () => {
	return (
		<nav className={s.bottom}>
			<ul className={s.navbar}>
				{headerBottomLinks.map(item => (
					<li>
						<Link href={'#'} className='link' key={item.id}>
							{item.text}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
export default HeaderBottom
