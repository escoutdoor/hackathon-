'use client'
import {
	TChangeProfileSchema,
	changeProfileSchema,
} from '@/libs/schemas/change-profile.schema'
import s from './form.module.scss'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { IUser } from '@/shared/interfaces/user.interface'
import Button from '@/components/ui/button/Button'
import Field from '@/components/ui/field/Field'
import { useUpdateProfile } from '@/hooks/useUpdateProfile'

const Form: FC<{ user: IUser }> = ({ user }) => {
	const { updateProfile } = useUpdateProfile()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<TChangeProfileSchema>({
		mode: 'onChange',
		resolver: zodResolver(changeProfileSchema),
		defaultValues: {
			email: user.email,
			firstName: user.firstName,
			lastName: user.lastName,
		},
	})

	const onSubmit: SubmitHandler<TChangeProfileSchema> = data => {
		console.log(data)
		updateProfile(data)
	}

	return (
		<>
			<form className={s.formWrap} onSubmit={handleSubmit(onSubmit)}>
				<div className={s.userName}>
					<Field
						label="First name"
						{...register('firstName')}
						type="text"
						error={errors.firstName?.message}
					/>
					<Field
						label="Last name"
						{...register('lastName')}
						type="text"
						error={errors.lastName?.message}
					/>
				</div>
				<div className={s.email}>
					<Field
						label="Email"
						{...register('email')}
						type="email"
						error={errors.email?.message}
					/>
				</div>
				<div className={s.data}>
					<div className={s.dataWrap}>
						<p className={s.title}>Date of Birth</p>
						<div className={s.dataInputs}>
							<input
								type="text"
								maxLength={2}
								className={s.day}
							/>
							<input
								type="text"
								maxLength={2}
								className={s.day}
							/>
							<input
								type="text"
								maxLength={4}
								className={s.year}
							/>
						</div>
					</div>
				</div>

				<div className={s.checkbox}>
					<p className={s.title}>Your contact preferences:</p>
					<div className={s.checkboxWrap}>
						<div className={s.checkboxBlock}>
							<input type="checkbox" className={s.check} />
							<div className={s.description}>
								<p className={s.checkboxTitle}>
									More for Student Beans members!
								</p>
								<p>
									Receive notifications about increased
									discounts, what's hot and up to 50% off
									discount events. Honestly, you won't regret
									it.
								</p>
							</div>
						</div>
						<div className={s.checkboxBlock}>
							<input type="checkbox" className={s.check} />
							<div className={s.description}>
								<p className={s.checkboxTitle}>Your brands</p>
								<p>
									Stay in the know with emails from the brands
									you choose to get codes from.
								</p>
							</div>
						</div>
					</div>
				</div>

				<Button
					style={{
						marginTop: '30px',
					}}
					type="submit"
				>
					Save Changes
				</Button>
			</form>
		</>
	)
}
export default Form
