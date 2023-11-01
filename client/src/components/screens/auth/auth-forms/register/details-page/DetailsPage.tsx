'use client'
import Field from '@/components/ui/field/Field'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import s from './details-page.module.scss'
import ErrorText from '@/components/ui/field/error-text/ErrorText'
import Button from '@/components/ui/button/Button'
import {
	FieldErrors,
	UseFormRegister,
	UseFormSetValue,
	UseFormWatch,
} from 'react-hook-form'
import { TRegisterSchema } from '@/libs/schemas/register.schema'

interface IDetailsPage {
	register: UseFormRegister<TRegisterSchema>
	errors: FieldErrors<TRegisterSchema>
	setActivePage: Dispatch<SetStateAction<string>>
	watch: UseFormWatch<TRegisterSchema>
	setValue: UseFormSetValue<TRegisterSchema>
}

const DetailsPage: FC<IDetailsPage> = ({
	register,
	errors,
	setActivePage,
	watch,
	setValue,
}) => {
	const day = watch('day')
	const month = watch('month')
	const year = watch('year')

	useEffect(() => {
		if (day && month && year) {
			const dateOfBirth = new Date(`${year}-${month}-${day}`)
			setValue('dateOfBirth', dateOfBirth)
		}
	}, [day, month, year, setValue])
	return (
		<>
			<div className={s.progressbar}>
				<div className={s.progress} />
			</div>
			<h2 style={{ margin: '20px 0', textAlign: 'center' }}>Your Details</h2>
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
					onClick={() => setActivePage('studentstatus')}
					disabled={Object.keys(errors).length !== 0}
				>
					Continue
				</Button>
			</div>
		</>
	)
}
export default DetailsPage
