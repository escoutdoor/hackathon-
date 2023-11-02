'use client'
import Body from '@/components/layout/body/Body'
import s from './page.module.scss'
import Link from 'next/link'
import AuthHeader from '@/components/ui/auth-header/AuthHeader'
import NavBlock from '@/components/layout/navblock-profile/NavBlock'

const page:React.FC = () => {
	
	return (
		<div className={s.page}>
			<AuthHeader/>
			<NavBlock/>
			<div className={s.body}>
				<Body/>
			</div>
		</div>
	)
}
export default page;