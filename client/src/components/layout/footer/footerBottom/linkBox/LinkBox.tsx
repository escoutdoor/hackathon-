import Link from 'next/link'
import s from './link-box.module.scss'
import { footerBottomLink } from '@/helpers/footer-bottom.data'

const LinkBox: React.FC = () => {
	return (
		<>
			<div className={s.linkColumn}>
				<h1 className={s.linkTitle}>Work With Us</h1>
				<ul className={s.linkList}>
					{footerBottomLink.map(link => (
						<Link href={link.href}>
							<li className={s.linkText}>{link.text}</li>
						</Link>
					))}
				</ul>
			</div>

			<div className={s.linkColumn}>
				<h1 className={s.linkTitle}>Work With Us</h1>
				<ul className={s.linkList}>
					{footerBottomLink.map(link => (
						<Link href={link.href}>
							<li className={s.linkText}>{link.text}</li>
						</Link>
					))}
				</ul>
			</div>

			<div className={s.linkColumn}>
				<h1 className={s.linkTitle}>Work With Us</h1>
				<ul className={s.linkList}>
					{footerBottomLink.map(link => (
						<Link href={link.href}>
							<li className={s.linkText}>{link.text}</li>
						</Link>
					))}
				</ul>
			</div>
		</>
	)
}
export default LinkBox
