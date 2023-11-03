import s from './blue-title.module.scss'
import { FC, HtmlHTMLAttributes, PropsWithChildren } from 'react'

const BlueTitle: FC<
	PropsWithChildren<HtmlHTMLAttributes<HTMLHeadingElement>>
> = ({ children, ...rest }) => {
	return (
		<h1 className={s.title} {...rest}>
			{children}
		</h1>
	)
}
export default BlueTitle
