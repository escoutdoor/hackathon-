import Field from '@/components/ui/field/Field'
import { Dispatch, FC, SetStateAction } from 'react'
import s from './student-page.module.scss'
import Button from '@/components/ui/button/Button'
import { FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { TRegisterSchema } from '@/libs/schemas/register.schema'

interface IDetailsPage {
	register: UseFormRegister<TRegisterSchema>
	errors: FieldErrors<TRegisterSchema>
	setActivePage: Dispatch<SetStateAction<string>>
	watch: UseFormWatch<TRegisterSchema>
}

const StudentsPage: FC<IDetailsPage> = ({
	register,
	errors,
	setActivePage,
	watch,
}) => {
	const graduationYearValue = watch('graduationYear')
	const studentEmailValue = watch('studentEmail')

	return (
		<>
			<div className={s.progressbar}>
				<div className={`${s.progress} ${s.double}`} />
			</div>
			<h2 style={{ margin: '20px 0', textAlign: 'center' }}>
				Verify your student status
			</h2>
			<Field
				{...register('graduationYear')}
				label="Graduation year"
				error={errors.graduationYear?.message}
				type="text"
				required
				defaultValue={2023}
				style={{ marginBottom: '20px' }}
			/>
			<Field
				{...register('studentEmail')}
				label="Student email address
"
				error={errors.email?.message}
				type="email"
				required
				placeholder="e.g. name@nmu.one"
			/>
			<Button
				onClick={() => setActivePage('country')}
				disabled={
					Object.keys(errors).length !== 0 ||
					!studentEmailValue ||
					!graduationYearValue
				}
				style={{ marginTop: '20px' }}
			>
				Continue
			</Button>
		</>
	)
}
export default StudentsPage
