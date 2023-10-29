'use client'
import s from './auth-forms.module.scss'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC } from 'react'
import Login from './login/Login'
import Register from './register/Register'
import cn from 'clsx'

const AuthForms: FC = () => {
	const { get } = useSearchParams()

	const tab = get('tab') ?? null

	const { push } = useRouter()

	return (
		<div className={s.forms}>
			<div className={s.switch}>
				<div
					className={tab === 'login' ? `${s.item}` : `${s.item} ${s.active}`}
					onClick={() => push('/auth?tab=register')}
				>
					Register
				</div>
				<div
					className={tab === 'login' ? `${s.item} ${s.active}` : `${s.item}`}
					onClick={() => push('/auth?tab=login')}
				>
					Login
				</div>
			</div>
			<div className={s.form}>{tab === 'login' ? <Login /> : <Register />}</div>
		</div>
	)
}

export default AuthForms
