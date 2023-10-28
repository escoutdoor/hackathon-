import { FC } from 'react'
import s from './footerBottom.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {
	IFooterBottomDesc,
	IFooterBottomItem,
	IFooterBottomLink,
} from '@/interfaces/footer-bottom.interface'

import { FaInstagram } from 'react-icons/fa'
import { SiTiktok } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import { footerBottomIcon, footerIcons } from '@/helpers/footer-bottom.data'
import LinkBox from './linkBox/LinkBox'
import Grade from './grade/Grade'
import Description from './description/Description'
import { IconType } from 'react-icons'

const FooterBottom: FC<{
	item: IFooterBottomItem
	link: IFooterBottomLink
	text: IFooterBottomDesc
}> = ({ item, link, text }) => {
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
					{footerIcons.map(item => {
						const { Icon } = item
						return <Icon key={item.id} />
					})}
				</ul>
			</div>

			<div className={s.contentBlock}>
				<LinkBox />
				<Grade />
			</div>

			<Description />

			<div className={s.line}> </div>
			<p className={s.company}>© 2023 Student Beans</p>
		</div>
	)
}
export default FooterBottom
