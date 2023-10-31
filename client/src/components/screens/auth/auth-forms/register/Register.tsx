'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, FC, SetStateAction } from 'react'
import { useActions } from '@/hooks/useActions'
import { TRegisterSchema, registerSchema } from '@/libs/schemas/register.schema'
import CreatePage from './create-page/CreatePage'
import DetailsPage from './details-page/DetailsPage'
import StudentsPage from './student-page/StudentPage'
import InstitutionPage from './institution-page/InstitutionPage'
import Loader from './loader/Loader'
import CheckPage from './check-page/CheckPage'

const Register: FC<{
	activePage: string
	setActivePage: Dispatch<SetStateAction<string>>
}> = ({ activePage, setActivePage }) => {
	const { register } = useActions()

	const {
		register: formRegister,
		formState: { errors, isValid },
		handleSubmit,
		getValues,
		control,
	} = useForm<TRegisterSchema>({
		mode: 'onChange',
		resolver: zodResolver(registerSchema),
	})

	const onSubmit: SubmitHandler<TRegisterSchema> = data => {
		register(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{activePage === 'create' ? (
				<CreatePage
					register={formRegister}
					errors={errors}
					setActivePage={setActivePage}
				/>
			) : activePage === 'detailsname' ? (
				<DetailsPage
					register={formRegister}
					errors={errors}
					setActivePage={setActivePage}
				/>
			) : activePage === 'studentstatus' ? (
				<StudentsPage
					register={formRegister}
					errors={errors}
					setActivePage={setActivePage}
				/>
			) : activePage === 'country' ? (
				<InstitutionPage
					register={formRegister}
					errors={errors}
					setActivePage={setActivePage}
					control={control}
					getValues={getValues}
				/>
			) : activePage === 'loader' ? (
				<Loader />
			) : (
				activePage === 'checkemail' && (
					<CheckPage
						register={formRegister}
						errors={errors}
						setActivePage={setActivePage}
						getValues={getValues}
					/>
				)
			)}
		</form>
	)
}

export default Register
