import { FC } from 'react'
import s from './footerBottom.module.scss'
import Link from 'next/link'
import Image from 'next/image'

import { FaInstagram } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

const FooterBottom: FC = () => {
	return (
		<div className={s.footerBottom}>
			<div className={s.icons}>
				<Link href={'/'}>
					<Image
						width={172}
						height={36}
						src={'/images/img/footer/logoWhite.png'}
						alt="logo"
					/>
				</Link>
				<ul className={s.iconList}>
					<li>
						<Link href={'/instagram'}>
							<FaInstagram />
						</Link>
					</li>
					<li>
						<Link href={'/tikTok'}>
							<SiTiktok />
						</Link>
					</li>
					<li>
						<Link href={'/twitter'}>
							<FaTwitter />
						</Link>
					</li>
					<li>
						<Link href={'/twitter'}>
							<BsYoutube />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
export default FooterBottom
