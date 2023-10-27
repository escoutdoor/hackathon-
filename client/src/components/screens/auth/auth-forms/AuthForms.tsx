'use client'
import s from './auth-forms.module.scss'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { TLoginSchema, loginSchema } from '@/libs/schemas/login.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const AuthForms: FC = () => {
	const { get } = useSearchParams()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TLoginSchema>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema),
	})

	const onSubmit: SubmitHandler<TLoginSchema> = data => {
		console.log(data)
	}

	const tab = get('tab') || 'login'

	return (
		<div className={s.forms}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					{...register('email')}
					label="Email address"
					error={errors.email?.message}
					required
				/>
				<Field
					{...register('password')}
					label="Password"
					error={errors.password?.message}
					type="password"
					required
				/>
				<Button type="submit" disabled={!!Object.keys(errors).length}>
					Login
				</Button>
			</form>
		</div>
	)
}

export default AuthForms
