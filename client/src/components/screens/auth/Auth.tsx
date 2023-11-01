import { NextPage } from 'next'
import AuthForms from './auth-forms/AuthForms'
import s from './auth.module.scss'

const Auth: NextPage = () => {
	return (
		<div className={s.authWrapper}>
			<AuthForms />
		</div>
	)
}

export default Auth
