'use client'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, FC, SetStateAction } from 'react'
import { useActions } from '@/hooks/useActions'
import { TRegisterSchema, registerSchema } from '@/libs/schemas/register.schema'
import CreatePage from './createPage/CreatePage'
import DetailsPage from './detailsPage/DetailsPage'
import StudentsPage from './studentPage/StudentPage'
import InstitutionPage from './institutionPage/InstitutionPage'
import Loader from './loader/Loader'
import CheckPage from './checkPage/CheckPage'

const Register: FC<{
	activePage: string
	setActivePage: Dispatch<SetStateAction<string>>
}> = ({ activePage, setActivePage }) => {
	const { login } = useActions()

	const {
		register: register,
		formState: { errors, isValid },
		handleSubmit,
		getValues,
		control,
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
				<CreatePage
					register={register}
					errors={errors}
					setActivePage={setActivePage}
				/>
			) : activePage === 'detailsname' ? (
				<DetailsPage
					register={register}
					errors={errors}
					setActivePage={setActivePage}
				/>
			) : activePage === 'studentstatus' ? (
				<StudentsPage
					register={register}
					errors={errors}
					setActivePage={setActivePage}
				/>
			) : activePage === 'country' ? (
				<InstitutionPage
					register={register}
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
						register={register}
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
