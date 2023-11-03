'use client'
import Settings from '@/components/screens/profile/settings/Settings'
import { useProfile } from '@/hooks/useProfile'

export default function SettingsPage() {
	const { profile } = useProfile()

	if (!profile) return null

	return <Settings user={profile} />
}
