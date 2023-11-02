import { z } from 'zod'
import { universities } from '../../helpers/universities'

export const registerSchema = z.object({
	email: z.string().email({
		message: 'Email is invalid',
	}),
	password: z.string().min(6, {
		message: 'Password must be at least 6 characters long',
	}),
	firstName: z
		.string()
		.min(3, {
			message: 'First name must be at least 3 characters long',
		})
		.max(20, {
			message: "First name can't be longer than 20 characters",
		}),
	lastName: z
		.string()
		.min(3, {
			message: 'Last name must be at least 3 characters long',
		})
		.max(20, {
			message: "Last name can't be longer than 20 characters",
		}),
	day: z.string().refine(
		value => {
			if (typeof value === 'string') {
				const numericValue = Number(value)
				if (isNaN(numericValue)) {
					return false
				}
				return numericValue >= 1 && numericValue <= 31
			} else if (typeof value === 'number') {
				return value >= 1 && value <= 31
			}
			return false
		},
		{
			message: 'Day error',
		}
	),
	month: z.string().refine(
		value => {
			if (typeof value === 'string') {
				const numericValue = Number(value)
				if (isNaN(numericValue)) {
					return false
				}
				return numericValue >= 1 && numericValue <= 12
			} else if (typeof value === 'number') {
				return value >= 1 && value <= 12
			}
			return false
		},
		{
			message: 'Month error',
		}
	),
	year: z.string().refine(
		value => {
			if (typeof value === 'string') {
				const numericValue = Number(value)
				if (isNaN(numericValue)) {
					return false
				}
				return (
					numericValue >= 1900 &&
					numericValue <= new Date().getFullYear()
				)
			} else if (typeof value === 'number') {
				return value >= 1900 && value <= new Date().getFullYear()
			}
			return false
		},
		{
			message: `Year error`,
		}
	),
	dateOfBirth: z.date(),
	graduationYear: z.number().refine(
		value => {
			if (typeof value === 'string') {
				const numericValue = Number(value)
				if (isNaN(numericValue)) {
					return false
				}
				return (
					numericValue >= new Date().getFullYear() &&
					new Date().getFullYear() + 5
				)
			} else if (typeof value === 'number') {
				return (
					value >= new Date().getFullYear() &&
					value <= new Date().getFullYear() + 5
				)
			}
			return false
		},
		{
			message: `Write down right year of graduation`,
		}
	),
	studentEmail: z.string().email({
		message: 'Email is invalid',
	}),
	university: z
		.object({
			label: z.string(),
			value: z.number(),
		})
		.refine(value => universities.includes(value.label), {
			message: `There is no such university in our database. Please, contact us to add your university to our database`,
		}),
	verifyCode: z.string(),
})

export type TRegisterSchema = z.infer<typeof registerSchema>
