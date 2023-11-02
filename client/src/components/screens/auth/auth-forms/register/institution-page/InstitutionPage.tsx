import Field from '@/components/ui/field/Field'
import { Dispatch, FC, SetStateAction } from 'react'
import s from './institution-page.module.scss'
import Button from '@/components/ui/button/Button'
import { useSendCode } from '@/hooks/useSendCode'
import {
	Control,
	FieldErrors,
	UseFormGetValues,
	UseFormRegister,
	UseFormWatch,
} from 'react-hook-form'
import { TRegisterSchema } from '@/libs/schemas/register.schema'

interface IDetailsPage {
	register: UseFormRegister<TRegisterSchema>
	errors: FieldErrors<TRegisterSchema>
	setActivePage: Dispatch<SetStateAction<string>>
	control: Control<TRegisterSchema>
	getValues: UseFormGetValues<TRegisterSchema>
	watch: UseFormWatch<TRegisterSchema>
}

const InstitutionPage: FC<IDetailsPage> = ({
	register,
	errors,
	setActivePage,
	control,
	getValues,
	watch,
}) => {
	const institutionValue = watch('university')

	const { sendEmail } = useSendCode({
		setActivePage,
	})

	const getFormValues = () => {
		const values = getValues()
		sendEmail(values.studentEmail)
	}

	console.log(institutionValue)

	return (
		<>
			<div className={s.progressbar}>
				<div className={s.progress} />
			</div>
			<h2 style={{ margin: '20px 0', textAlign: 'center' }}>
				Where do you study?
			</h2>
			<Field
				{...register('university.label')}
				label="Institution"
				error={errors.university?.label?.message}
				type="text"
				required
				placeholder="Search for your institution"
				control={control}
			/>
			<Button
				onClick={getFormValues}
				disabled={Object.keys(errors).length !== 0 || !institutionValue}
				style={{ marginTop: '20px' }}
			>
				Continue
			</Button>
		</>
	)
}
export default InstitutionPage
