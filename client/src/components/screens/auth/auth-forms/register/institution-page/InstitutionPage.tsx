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
	UseFormSetValue,
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
	sendEmail: (studentEmail: string) => void
	setValue: UseFormSetValue<TRegisterSchema>
}

const InstitutionPage: FC<IDetailsPage> = ({
	register,
	errors,
	control,
	getValues,
	watch,
	sendEmail,
	setValue,
}) => {
	const institutionValue = watch('university')

	const getFormValues = () => {
		const values = getValues()
		// setValue('institution', institutionValue.label)
		sendEmail(values.studentEmail)
	}

	return (
		<>
			<div className={s.progressbar}>
				<div className={s.progress} />
			</div>
			<h2 style={{ margin: '20px 0', textAlign: 'center' }}>
				Where do you study?
			</h2>
			<Field
				{...register('university')}
				label='Institution'
				error={errors.university?.message}
				type='text'
				required
				placeholder='Search for your institution'
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
