import React, { FC } from 'react'
import s from './footer.module.scss'
import Banner from './banner/Banner'
import {
	IFooterBottomDesc,
	IFooterBottomItem,
	IFooterBottomLink,
} from '@/interfaces/footer-bottom.interface'
import FooterBottom from './footerBottom/FooterBottom'

const Footer: FC = () => {
	return (
		<footer className={s.footer}>
			<div className={s.footerWrap}>
				<Banner />
				<FooterBottom />
			</div>
		</footer>
	)
}
export default Footer
