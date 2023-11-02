import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'

export const metadata: Metadata = {
	title: 'Search Discounts',
	description: 'Search discounts',
}

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <>{children}</>
}

export default Layout
