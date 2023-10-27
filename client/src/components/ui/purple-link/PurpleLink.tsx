import s from './purple-link.module.scss'
import Link, { LinkProps } from 'next/link'
import { FC, PropsWithChildren } from 'react'

interface IPurpleLink extends LinkProps {}

const PurpleLink: FC<PropsWithChildren<IPurpleLink>> = ({
	children,
	...rest
}) => {
	return (
		<Link {...rest} className={s.link}>
			{children}
		</Link>
	)
}

export default PurpleLink
