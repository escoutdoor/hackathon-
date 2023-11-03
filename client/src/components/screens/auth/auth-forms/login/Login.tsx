'use client'
import { TLoginSchema, loginSchema } from '@/libs/schemas/login.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/button/Button'
import s from './../auth-forms.module.scss'
import { useRouter } from 'next/navigation'

const Login: FC = () => {
	const { login } = useActions()
	const { push } = useRouter()

	const {
		register: register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm<TLoginSchema>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema),
	})

	const onSubmit: SubmitHandler<TLoginSchema> = data => {
		login(data)

		push('/')
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={s.textBlock}>
				<h2 className={s.title}>Hello again!</h2>
				<span className={s.text}>
					Log in to your Students Premium account
				</span>
			</div>

			<Field
				{...register('email')}
				label="Email address"
				error={errors.email?.message}
				type="email"
				required
			/>
			<Field
				{...register('password')}
				label="Password"
				error={errors.password?.message}
				type="password"
				required
			/>
			<div className={s.buttonBlock}>
				<Button type="submit" disabled={!isValid}>
					Login
				</Button>
			</div>
		</form>
	)
}

export default Login
