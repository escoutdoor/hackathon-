'use client'
import Field from '@/components/ui/field/Field'
import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react'
import s from './check-page.module.scss'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import { useSendCode } from '@/hooks/useSendCode'
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { TRegisterSchema } from '@/libs/schemas/register.schema'
import Loader from '../loader/Loader'

interface ICheckPage {
	register: UseFormRegister<TRegisterSchema>
	errors: FieldErrors<TRegisterSchema>
	setActivePage: Dispatch<SetStateAction<string>>
	watch: UseFormWatch<TRegisterSchema>
	verificationCode: string
}

const CheckPage: FC<ICheckPage> = ({
	register,
	errors,
	watch,
	verificationCode,
}) => {
	const verifyCodeValue = watch('verifyCode')
	const [wrongCodeError, setWrongCodeError] = useState<boolean>(false)

	const checkCode = () => {
		if (verifyCodeValue === verificationCode) {
			setWrongCodeError(false)
		} else {
			setWrongCodeError(true)
		}
	}

	return (
		<>
			{' '}
			{!verificationCode ? (
				<Loader />
			) : (
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
						alt=""
						className={s.image}
					/>

					<Field
						{...register('verifyCode')}
						label="Verification code"
						error={
							wrongCodeError
								? 'Wrong code'
								: errors.verifyCode?.message
						}
						type="text"
						required
						placeholder="Write here verification code"
					/>
					<Button
						disabled={!verifyCodeValue}
						onClick={checkCode}
						style={{ marginTop: '20px' }}
						type="submit"
					>
						Continue
					</Button>
				</>
			)}
		</>
	)
}
export default CheckPage
