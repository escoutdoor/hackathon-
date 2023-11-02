'use client'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const pathname = usePathname()

	return (
		<>
			{pathname !== '/auth' && <Header />}
			{children}
			{pathname !== '/auth' && <Footer />}
		</>
	)
}

export default Layout
