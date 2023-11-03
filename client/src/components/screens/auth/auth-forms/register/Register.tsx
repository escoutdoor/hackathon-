'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, FC, SetStateAction, useState } from 'react'
import { useActions } from '@/hooks/useActions'
import { TRegisterSchema, registerSchema } from '@/libs/schemas/register.schema'
import CreatePage from './create-page/CreatePage'
import DetailsPage from './details-page/DetailsPage'
import StudentsPage from './student-page/StudentPage'
import InstitutionPage from './institution-page/InstitutionPage'
import Loader from './loader/Loader'
import CheckPage from './check-page/CheckPage'
import { useSendCode } from '@/hooks/useSendCode'
import Button from '@/components/ui/button/Button'

const Register: FC<{
	activePage: string
	setActivePage: Dispatch<SetStateAction<string>>
}> = ({ activePage, setActivePage }) => {
	const { register } = useActions()

	const { sendEmail, verificationCode } = useSendCode({ setActivePage })

	const [wrongCodeError, setWrongCodeError] = useState<boolean>(false)

	const {
		register: formRegister,
		formState: { errors },
		handleSubmit,
		getValues,
		control,
		watch,
		setValue,
	} = useForm<TRegisterSchema>({
		mode: 'onChange',
		resolver: zodResolver(registerSchema),
	})

	const verifyCodeValue = watch('verifyCode')

	const onSubmit: SubmitHandler<TRegisterSchema> = data => {
		if (verifyCodeValue === verificationCode) {
			setWrongCodeError(false)
			console.log(data)

			register({
				...data,
				university: data.university.label,
			})
		} else {
			setWrongCodeError(true)
		}
	}

	// const test = () => {
	// 	const test1 = getValues()
	// 	console.log({
	// 		...test1,
	// 		university: test1.university.label,
	// 	})
	// }

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{activePage === 'create' ? (
				<CreatePage
					register={formRegister}
					errors={errors}
					setActivePage={setActivePage}
					watch={watch}
				/>
			) : activePage === 'detailsname' ? (
				<DetailsPage
					register={formRegister}
					errors={errors}
					setActivePage={setActivePage}
					watch={watch}
					setValue={setValue}
				/>
			) : activePage === 'studentstatus' ? (
				<StudentsPage
					register={formRegister}
					errors={errors}
					setActivePage={setActivePage}
					watch={watch}
				/>
			) : activePage === 'country' ? (
				<InstitutionPage
					register={formRegister}
					errors={errors}
					setActivePage={setActivePage}
					control={control}
					getValues={getValues}
					watch={watch}
					sendEmail={sendEmail}
					setValue={setValue}
				/>
			) : activePage === 'loader' ? (
				<Loader />
			) : (
				activePage === 'checkemail' && (
					<>
						<CheckPage
							register={formRegister}
							errors={errors}
							setActivePage={setActivePage}
							watch={watch}
							verifyCodeValue={verifyCodeValue}
							wrongCodeError={wrongCodeError}
							getValues={getValues}
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
			)}
		</form>
	)
}

export default Register
