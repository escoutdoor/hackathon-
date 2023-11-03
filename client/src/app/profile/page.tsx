'use client'
import Profile from '@/components/screens/profile/Profile'
import { useProfile } from '@/hooks/useProfile'

export default function ProfilePage() {
	const { profile } = useProfile()

	if (!profile) return null

	return <Profile user={profile} />
}
