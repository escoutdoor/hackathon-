import AuthHeader from '@/components/ui/auth-header/AuthHeader'
import Providers from '@/utils/provider'
import { FC, PropsWithChildren } from 'react'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<AuthHeader />
			{children}
		</>
	)
}

export default Layout
