import { Montserrat } from 'next/font/google'
import './globals.scss'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import Providers from '@/utils/provider'
import { usePathname } from 'next/navigation'
import { Metadata } from 'next'
import MainLayout from '@/components/layout/layout'

const montserrat = Montserrat({
	subsets: ['latin'],
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
	const pathname = usePathname()
	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<>
					{pathname !== '/auth' && !pathname.match('/info') && <Header />}
					<Providers>{children}</Providers>
					{pathname !== '/auth' && !pathname.match('/info') && <Footer />}
				</>
			</body>
		</html>
	)
}
