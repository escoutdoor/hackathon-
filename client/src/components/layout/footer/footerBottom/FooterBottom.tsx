import { FC } from 'react'
import s from './footerBottom.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import {
	IFooterBottomDesc,
	IFooterBottomItem,
	IFooterBottomLink,
} from '@/interfaces/footer-bottom.interface'

import LinkBox from './linkBox/LinkBox'
import Grade from './grade/Grade'
import Description from './description/Description'
import FooterIcon from './footer-icon/FooterIcon'

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
				<Grade />
			</div>

			<Description />

			<div className={s.line}> </div>
			<p className={s.company}>© 2023 Student Beans</p>
		</div>
	)
}
export default FooterBottom
