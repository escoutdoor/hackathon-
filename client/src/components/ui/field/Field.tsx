import s from './field.module.scss'
import { InputHTMLAttributes, forwardRef } from 'react'
import ErrorText from './error-text/ErrorText'

interface IField
	extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
	label?: string
	error?: string
	required?: boolean
}

const Field = forwardRef<HTMLInputElement, IField>(function Comp(
	{ label, error, required, ...rest },
	ref
) {
	return (
		<div className={rest.maxLength === 4 ? `${s.field} ${s.year}` : s.field}>
			<label>
				<h1 className={s.title}>{label}</h1>
			</label>
			<input className={s.input} {...rest} ref={ref} />
			{!rest.maxLength && <ErrorText>{error}</ErrorText>}
		</div>
	)
})

export default Field
