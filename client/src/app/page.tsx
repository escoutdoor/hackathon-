import Home from '@/components/screens/home/Home'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Home',
	description: 'Home page of Students Premium',
}

export default function HomePage() {
	return <Home />
}
