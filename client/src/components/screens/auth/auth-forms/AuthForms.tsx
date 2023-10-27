'use client'
import s from './auth-forms.module.scss'
import { useSearchParams } from 'next/navigation'
import { FC } from 'react'
import Login from './login/Login'
import Register from './register/Register'

const AuthForms: FC = () => {
	const { get } = useSearchParams()

	const tab = get('tab') || 'login'

	return (
		<div className={s.forms}>
			<div className={s.header}>
				{tab === 'login' ? <Login /> : <Register />}
			</div>
		</div>
	)
}

export default AuthForms
