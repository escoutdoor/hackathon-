import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import Providers from '@/utils/provider'

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--var-montserrat',
})

export const metadata: Metadata = {
	title: {
		template: '%s | Students Premium',
		default: 'Students Premium',
	},
	description:
		'D0bР94Ku - Students Premium. Hackathon 2023 Ivan Popov, Vladyslav Oreshnykov, Anastasia Zabolotna',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<Header />
				<Providers>{children}</Providers>
				<Footer />
			</body>
		</html>
	)
}
