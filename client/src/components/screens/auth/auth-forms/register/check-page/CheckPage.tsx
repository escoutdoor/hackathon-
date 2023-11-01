'use client'
import Field from '@/components/ui/field/Field'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import s from './check-page.module.scss'
import Button from '@/components/ui/button/Button'
import Image from 'next/image'
import { useSendCode } from '@/hooks/useSendCode'
import { FieldErrors, UseFormGetValues, UseFormRegister } from 'react-hook-form'
import { TRegisterSchema } from '@/libs/schemas/register.schema'

interface IDetailsPage {
	register: UseFormRegister<TRegisterSchema>
	errors: FieldErrors<TRegisterSchema>
	setActivePage: Dispatch<SetStateAction<string>>
	getValues: UseFormGetValues<TRegisterSchema>
}

const CheckPage: FC<IDetailsPage> = ({
	register,
	errors,
	setActivePage,
	getValues,
}) => {
	const [wrongCodeError, setWrongCodeError] = useState<string>('')

	const checkCode = () => {
		const values = getValues()
		if (values.verifyCode === verificationCode) {
			setWrongCodeError('right')
		} else {
			setWrongCodeError('wrong')
		}
	}

	const { verificationCode } = useSendCode({
		setActivePage,
	})

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
				error={
					wrongCodeError === 'wrong' ? 'Wrong code' : errors.verifyCode?.message
				}
				type='text'
				required
				placeholder='Write here verification code'
			/>
			<Button
				disabled={wrongCodeError === 'wrong' || wrongCodeError === ''}
				onClick={checkCode}
				style={{ marginTop: '20px' }}
				type='submit'
			>
				Continue
			</Button>
		</>
	)
}
export default CheckPage
