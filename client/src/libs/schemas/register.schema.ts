import { z } from 'zod'

function isValidNumber(value: string | number, min: number, max: number) {
	const numericValue = Number(value)
	if (isNaN(numericValue)) {
		return false // Значение NaN, не является числом
	}
	return numericValue >= min && numericValue <= max
}

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
				return numericValue >= 1900 && numericValue <= new Date().getFullYear()
			} else if (typeof value === 'number') {
				return value >= 1900 && value <= new Date().getFullYear()
			}
			return false
		},
		{
			message: `Year error`,
		}
	),
})

export type TRegisterSchema = z.infer<typeof registerSchema>
