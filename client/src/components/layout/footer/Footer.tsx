import React, { FC } from 'react'
import s from './footer.module.scss'
import {
	IFooterBottomDesc,
	IFooterBottomItem,
	IFooterBottomLink,
} from '@/interfaces/footer-bottom.interface'
import FooterBottom from './footerBottom/FooterBottom'

const Footer: FC<{item: IFooterBottomItem, link: IFooterBottomLink, text: IFooterBottomDesc}> = ({item, link, text}) => {
	return (
		<footer className={s.footer}>
			<div className={s.footerWrap}>
				<FooterBottom />
			</div>
		</footer>
	)
}
export default Footer
