'use client'
import s from './header-auth-buttons.module.scss'
import { FC } from 'react'
import { useRouter } from 'next/navigation'
import { useProfile } from '@/hooks/useProfile'
import { getName } from '@/utils/getName'
import Image from 'next/image'
import Link from 'next/link'
import PurpleLink from '@/components/ui/purple-link/PurpleLink'
import Button from '@/components/ui/button/Button'

const HeaderAuthButtons: FC = () => {
	const { push } = useRouter()

	const { profile } = useProfile()

	return (
		<div className={s.auth}>
			<div className={s.container}>
				{profile ? (
					<>
						<PurpleLink href="/profile">
							{getName(profile)}
						</PurpleLink>
						<Link href={'/profile'}>
							<Image
								width={60}
								height={60}
								className={s.avatar}
								src={`/images/avatars/${profile.avatarPath}`}
								alt={`profile-avatar ${profile.firstName}`}
							/>
						</Link>
					</>
				) : (
					<>
						<PurpleLink href="/auth?tab=login">Login</PurpleLink>
						<Button
							style={{
								width: '120px',
							}}
							onClick={() => push('/auth?tab=register')}
						>
							Register
						</Button>
					</>
				)}
			</div>
		</div>
	)
}

export default HeaderAuthButtons
