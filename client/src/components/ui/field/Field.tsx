'use client'
import s from './field.module.scss'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import ErrorText from './error-text/ErrorText'
import { PiGraduationCapLight } from 'react-icons/pi'
import Select from 'react-select'
import { universities } from '@/helpers/universities'

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
	const universityOptions = universities.map((university, index) => ({
		value: index,
		label: university,
	}))
	return (
		<div className={rest.maxLength === 4 ? `${s.field} ${s.year}` : s.field}>
			<label>
				<h1 className={s.title}>{label}</h1>
			</label>
			{rest.placeholder === 'e.g. name@nmu.one' && (
				<div className={s.students}>
					<PiGraduationCapLight />
					<span className={s.text}>
						This should be your official student email, eg.{' '}
						<strong>you@school.edu</strong>
					</span>
				</div>
			)}
			{rest.placeholder !== 'Search for your institution' ? (
				<input className={s.input} {...rest} ref={ref} />
			) : (
				<Select options={universityOptions} />
			)}

			{!rest.maxLength && <ErrorText>{error}</ErrorText>}
		</div>
	)
})

export default Field
