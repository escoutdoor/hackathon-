import Field from '@/components/ui/field/Field'
import { Dispatch, FC, SetStateAction } from 'react'
import s from './institution-page.module.scss'
import Button from '@/components/ui/button/Button'
import { useSendCode } from '@/hooks/useSendCode'

interface IDetailsPage {
	register: any
	errors: any
	setActivePage: Dispatch<SetStateAction<string>>
	control: any
	getValues: any
}

const InstitutionPage: FC<IDetailsPage> = ({
	register,
	errors,
	setActivePage,
	control,
	getValues,
}) => {
	const { sendEmail } = useSendCode({
		setActivePage,
	})

	const getFormValues = () => {
		const values = getValues()
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
				{...register('institution')}
				label='Institution'
				error={errors.institution?.message}
				type='text'
				required
				placeholder='Search for your institution'
				control={control}
			/>
			<Button
				onClick={getFormValues}
				disabled={Object.keys(errors).length !== 0}
				style={{ marginTop: '20px' }}
			>
				Continue
			</Button>
		</>
	)
}
export default InstitutionPage
