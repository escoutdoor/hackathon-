'use client'
import Field from '@/components/ui/field/Field'
import { Dispatch, FC, SetStateAction } from 'react'
import s from './check-page.module.scss'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import {
	FieldErrors,
	UseFormGetValues,
	UseFormRegister,
	UseFormWatch,
} from 'react-hook-form'
import { TRegisterSchema } from '@/libs/schemas/register.schema'

interface ICheckPage {
	register: UseFormRegister<TRegisterSchema>
	errors: FieldErrors<TRegisterSchema>
	setActivePage: Dispatch<SetStateAction<string>>
	watch: UseFormWatch<TRegisterSchema>
	verifyCodeValue: string
	wrongCodeError: boolean
	getValues: UseFormGetValues<TRegisterSchema>
}

const CheckPage: FC<ICheckPage> = ({
	register,
	errors,
	verifyCodeValue,
	wrongCodeError,
	getValues,
}) => {
	return (
		<>
			<div className={s.progressbar}>
				<div className={s.progress} />
			</div>
			<h2 style={{ margin: '20px 0 0', textAlign: 'center' }}>
				Check your student email
			</h2>
			<p className={s.text}>We've sent a verification code</p>
			<Image
				src={'/images/img/message.jpg'}
				width={196}
				height={123}
				alt=''
				className={s.image}
			/>

			<Field
				{...register('verifyCode')}
				label='Verification code'
				error={wrongCodeError ? 'Wrong code' : errors.verifyCode?.message}
				type='text'
				required
				placeholder='Write here verification code'
			/>

			<Button
				disabled={!verifyCodeValue}
				style={{ marginTop: '20px' }}
				type='submit'
			>
				Continue
			</Button>
		</>
	)
}
export default CheckPage
