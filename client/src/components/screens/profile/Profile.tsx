import s from './profile.module.scss'
import { FC } from 'react'
import { IUser } from '@/shared/interfaces/user.interface'
import AuthHeader from '@/components/ui/auth-header/AuthHeader'
import Image from 'next/image'
import NavBlock from '@/components/layout/navblock-profile/NavBlock'
import moment from 'moment'
import { getName } from '@/utils/getName'
import Button from '@/components/ui/button/Button'
import { useActions } from '@/hooks/useActions'
import { useRouter } from 'next/navigation'

const Profile: FC<{ user: IUser }> = ({ user }) => {
	const { logout } = useActions()
	const { push } = useRouter()

	const handleLogout = () => {
		logout()
		push('/')
	}

	return (
		<>
			<div className={s.user}>
				<div className={s.userTop}>
					<Image
						className={s.img}
						width={150}
						height={150}
						src={`/images/avatars/${user.avatarPath}`}
						alt="avatar"
					/>
					<div className={s.userInfo}>
						<p className={s.userName}>{getName(user)}</p>
						<p>
							<span>University:</span> {user.student.university}
						</p>
						<p>
							<span>Graduation:</span>{' '}
							{user.student.graduationYear}
						</p>
					</div>
				</div>
				<div className={s.addInfo}>
					<p>
						<span>Email address:</span> {user.student.email}
					</p>
					<p>
						<span>Birthday:</span>{' '}
						{moment(user.dateOfBirth).format('DD.MM.YYYY')}
					</p>
				</div>
				<Button
					style={{
						marginTop: '30px',
						width: '20%',
					}}
					onClick={handleLogout}
				>
					Log out
				</Button>
			</div>
		</>
	)
}
export default Profile
