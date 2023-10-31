import Field from '@/components/ui/field/Field'
import { Dispatch, FC, SetStateAction } from 'react'
import s from './student-page.module.scss'
import Button from '@/components/ui/button/Button'

interface IDetailsPage {
	register: any
	errors: any
	setActivePage: Dispatch<SetStateAction<string>>
}

const StudentsPage: FC<IDetailsPage> = ({
	register,
	errors,
	setActivePage,
}) => {
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
				label='Graduation year'
				error={errors.graduationYear?.message}
				type='text'
				required
				defaultValue={2023}
				style={{ marginBottom: '20px' }}
			/>
			<Field
				{...register('studentEmail')}
				label='Student email address
'
				error={errors.email?.message}
				type='email'
				required
				placeholder='e.g. name@nmu.one'
			/>
			<Button
				onClick={() => setActivePage('country')}
				disabled={Object.keys(errors).length !== 0}
				style={{ marginTop: '20px' }}
			>
				Continue
			</Button>
		</>
	)
}
export default StudentsPage
