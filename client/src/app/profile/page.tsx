import Profile from '@/components/screens/profile/Profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Profile',
}

export default function ProfilePage() {
	return <Profile />
}
