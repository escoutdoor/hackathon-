import AuthHeader from '@/components/ui/auth-header/AuthHeader'
import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
	title: 'Authentication',
	description: 'Search discounts',
}

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<AuthHeader />
			{children}
		</>
	)
}

export default Layout
