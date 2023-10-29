import AuthHeader from '@/components/ui/auth-header/AuthHeader'
import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<div>
			<div>
				<AuthHeader />
				{children}
			</div>
		</div>
	)
}

export default Layout
