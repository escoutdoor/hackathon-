import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<div className="wrapper">{children}</div>
		</div>
	)
}

export default Layout
