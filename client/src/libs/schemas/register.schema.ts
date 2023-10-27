import { z } from 'zod'

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
})

export type TRegisterSchema = z.infer<typeof registerSchema>
