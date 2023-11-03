'use client'
import s from './settings.module.scss'
import Body from '@/components/layout/body/Body'
import { FC } from 'react'
import { IUser } from '@/shared/interfaces/user.interface'

const Settings: FC<{ user: IUser }> = ({ user }) => {
	return (
		<div className={s.page}>
			<div className={s.body}>
				<Body />
			</div>
		</div>
	)
}
export default Settings
