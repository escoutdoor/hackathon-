'use client'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import Providers from '@/utils/provider'
import { usePathname } from 'next/navigation'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--var-montserrat',
})

// export const metadata: Metadata = {
// 	title: {
// 		template: '%s | Students Premium',
// 		default: 'Students Premium',
// 	},
// 	description:
// 		'D0bР94Ku - Students Premium. Hackathon 2023 Ivan Popov, Vladyslav Oreshnykov, Anastasia Zabolotna',
// }

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const pathname = usePathname()
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<>
					{pathname !== '/auth' && <Header />}
					<Providers>{children}</Providers>
					{pathname !== '/auth' && <Footer />}
				</>
			</body>
		</html>
	)
}
