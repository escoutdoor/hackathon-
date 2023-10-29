'use client'
import { TLoginSchema, loginSchema } from '@/libs/schemas/login.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/button/Button'
import s from './../auth-forms.module.scss'
import { TRegisterSchema, registerSchema } from '@/libs/schemas/register.schema'
import Link from 'next/link'

const Register: FC = () => {
	const { login } = useActions()

	const {
		register: register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm<TRegisterSchema>({
		mode: 'onChange',
		resolver: zodResolver(registerSchema),
	})

	const onSubmit: SubmitHandler<TRegisterSchema> = data => {
		login(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={s.textBlock}>
				<h2 className={s.title}>Create an account</h2>
				<span className={s.text}>
					Register for discounts on all your fave brands.
				</span>
			</div>

			<Field
				{...register('email')}
				label='Email address'
				error={errors.email?.message}
				type='email'
				required
			/>
			<Field
				{...register('password')}
				label='Password'
				error={errors.password?.message}
				type='password'
				required
			/>
			<div className={s.buttonBlock}>
				<Button type='submit' disabled={Object.keys(errors).length !== 0}>
					Let's go
				</Button>
			</div>
			<div className={s.policy}>
				By continuing to create an account, you agree to Student Beans'{' '}
				<Link className={s.link} href={'#'}>
					Terms & Conditions
				</Link>{' '}
				and{' '}
				<Link className={s.link} href={'#'}>
					Privacy Policy
				</Link>
				.
			</div>
		</form>
	)
}

export default Register
