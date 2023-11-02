import { Metadata } from 'next'
import { FC, PropsWithChildren } from 'react'
import RootLayout from '../layout'

export const metadata: Metadata = {
	title: 'Category',
	description: 'Category',
}

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <>{children}</>
}

export default Layout
