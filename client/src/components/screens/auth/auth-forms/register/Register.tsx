'use client'
import { TLoginSchema, loginSchema } from '@/libs/schemas/login.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useActions } from '@/hooks/useActions'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/button/Button'
import s from './../auth-forms.module.scss'
import { TRegisterSchema, registerSchema } from '@/libs/schemas/register.schema'
import Link from 'next/link'
import ErrorText from '@/components/ui/field/error-text/ErrorText'

const Register: FC<{
	activePage: string
	setActivePage: Dispatch<SetStateAction<string>>
}> = ({ activePage, setActivePage }) => {
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
			{activePage === 'create' ? (
				<>
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
						<Button
							onClick={() => setActivePage('detailsname')}
							disabled={Object.keys(errors).length !== 0}
						>
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
				</>
			) : (
				activePage === 'detailsname' && (
					<>
						<div className={s.progressbar}>
							<div className={s.progress} />
						</div>
						<h2
							className={s.title}
							style={{ margin: '20px 0', textAlign: 'center' }}
						>
							Your Details
						</h2>
						<Field
							{...register('firstName')}
							label='First name'
							error={errors.firstName?.message}
							type='text'
							required
						/>
						<Field
							{...register('lastName')}
							label='Last name'
							error={errors.lastName?.message}
							type='text'
							required
						/>
						<div className={s.date}>
							<Field
								{...register('day')}
								error={errors.day?.message}
								type='number'
								placeholder='DD'
								required
								maxLength={2}
							/>

							<Field
								{...register('month')}
								error={errors.month?.message}
								type='number'
								placeholder='MM'
								required
								maxLength={2}
							/>

							<Field
								{...register('year')}
								error={errors.year?.message}
								type='number'
								placeholder='YYYY'
								required
								maxLength={4}
							/>
						</div>
						{!errors.day?.message &&
						!errors.month?.message &&
						!errors.year?.message ? null : (
							<ErrorText>Please enter a valid date of birth</ErrorText>
						)}
						<div className={s.buttonBlock}>
							<Button
								onClick={() => setActivePage('detailsname')}
								disabled={Object.keys(errors).length !== 0}
							>
								Continue
							</Button>
						</div>
					</>
				)
			)}
		</form>
	)
}

export default Register
