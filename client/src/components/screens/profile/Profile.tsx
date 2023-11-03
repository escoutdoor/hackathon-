import AuthHeader from '@/components/ui/auth-header/AuthHeader'
import s from './profile.module.scss'
import Image from 'next/image'
import NavBlock from '@/components/layout/navblock-profile/NavBlock'
import { NextPage } from 'next'

const Profile: NextPage = () => {
	return (
		<>
			<AuthHeader />
			<NavBlock />
			<div className={s.user}>
				<div className={s.userTop}>
					<Image
						className={s.img}
						width={150}
						height={150}
						src={'/images/avatars/no-avatar.png'}
						alt="ava"
					/>
					<div className={s.userInfo}>
						<p className={s.userName}>LastName Name</p>
						<p>
							<span>University:</span> Dnipro University of
							technology
						</p>
						<p>
							<span>Graduation:</span> 2025
						</p>
					</div>
				</div>
				<div className={s.addInfo}>
					<p>
						<span>Email address:</span> test@gmail.com
					</p>
					<p>
						<span>Birthday:</span> 10.10.2005
					</p>
				</div>
			</div>
		</>
	)
}
export default Profile
