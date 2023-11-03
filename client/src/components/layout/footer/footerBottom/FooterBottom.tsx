import { FC } from 'react'
import s from './footerBottom.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import LinkBox from './linkBox/LinkBox'
import FooterIcon from './footer-icon/FooterIcon'

const FooterBottom: FC = () => {
	return (
		<div className={s.footerBottom}>
			<div className={s.icons}>
				<Link href={'/'}>
					<Image
						width={200}
						height={60}
						src={'/images/img/footer/logoWhiteSP.png'}
						alt="logo"
					/>
				</Link>

				<FooterIcon />
			</div>

			<div className={s.contentBlock}>
				<LinkBox />
			</div>

			<div className={s.end}>
				<div className={s.line}> </div>
				<p className={s.company}>© 2023 Students Premium</p>
				<div className={s.link}>
					<Link href={'https://github.com/escoutdoor'}>Popov Ivan</Link>
					<Link href={'https://github.com/naaaasty'}>Zabolotna Anastasiia</Link>
					<Link href={'https://github.com/OrynHydro'}>Oreshnikov Vladislav</Link>
				</div>
			</div>
		</div>
	)
}
export default FooterBottom
