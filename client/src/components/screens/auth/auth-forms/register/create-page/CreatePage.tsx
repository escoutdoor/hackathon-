'use client'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import s from './create-page.module.scss'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/button/Button'
import Link from 'next/link'
import { TRegisterSchema } from '@/libs/schemas/register.schema'
import {
	FieldError,
	FieldErrors,
	UseFormRegister,
	UseFormWatch,
} from 'react-hook-form'

interface ICreatePage {
	register: UseFormRegister<TRegisterSchema>
	errors: FieldErrors<TRegisterSchema>
	setActivePage: Dispatch<SetStateAction<string>>
	watch: UseFormWatch<TRegisterSchema>
}

const CreatePage: FC<ICreatePage> = ({
	register,
	errors,
	setActivePage,
	watch,
}) => {
	const emailValue = watch('email')
	const passwordValue = watch('password')
	return (
		<>
			<div className={s.textBlock}>
				<h2>Create an account</h2>
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
					disabled={
						Object.keys(errors).length !== 0 || !emailValue || !passwordValue
					}
				>
					Let's go
				</Button>
			</div>
			<div className={s.policy}>
				By continuing to create an account, you agree to Students Premium'{' '}
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
	)
}

export default CreatePage
