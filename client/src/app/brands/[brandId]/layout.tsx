import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
	title: 'Brand',
	description: 'Discounts for students',
}

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <>{children}</>
}

export default Layout
