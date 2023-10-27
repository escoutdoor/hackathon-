import React, { FC } from 'react'
import s from './footer.module.scss'
import Banner from './banner/Banner'

const Footer: FC = () => {
	return (
		<footer className={s.footer}>
			<div className={s.wrapper}>
				<Banner />
			</div>
		</footer>
	)
}
export default Footer
