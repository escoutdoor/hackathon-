import { Dispatch, FC, SetStateAction } from 'react'
import s from './create-page.module.scss'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/button/Button'
import Link from 'next/link'

interface ICreatePage {
	register: any
	errors: any
	setActivePage: Dispatch<SetStateAction<string>>
}

const CreatePage: FC<ICreatePage> = ({ register, errors, setActivePage }) => {
	return (
		<>
			<div className={s.textBlock}>
				<h2>Create an account</h2>
				<span className={s.text}>
					Register for discounts on all your fave brands.
				</span>
			</div>

			<Field
				{...register('email')}
				label='Email address'
				error={errors.email?.message}
				type='email'
				required
			/>
			<Field
				{...register('password')}
				label='Password'
				error={errors.password?.message}
				type='password'
				required
			/>
			<div className={s.buttonBlock}>
				<Button
					onClick={() => setActivePage('detailsname')}
					disabled={Object.keys(errors).length !== 0}
				>
					Let's go
				</Button>
			</div>
			<div className={s.policy}>
				By continuing to create an account, you agree to Student Beans'{' '}
				<Link className={s.link} href={'#'}>
					Terms & Conditions
				</Link>{' '}
				and{' '}
				<Link className={s.link} href={'#'}>
					Privacy Policy
				</Link>
				.
			</div>
		</>
	)
}

export default CreatePage
