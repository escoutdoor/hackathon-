import NavBlock from '@/components/layout/navblock-profile/NavBlock'
import AuthHeader from '@/components/ui/auth-header/AuthHeader'
import { FC, PropsWithChildren } from 'react'

const layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			<AuthHeader />
			<NavBlock />
			{children}
		</>
	)
}

export default layout
