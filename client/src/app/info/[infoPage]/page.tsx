'use client'
import Info from '@/components/screens/info/Info'

export default function InfoPage({ params }: { params: { infoPage: string } }) {
	return <Info page={params.infoPage} />
}
