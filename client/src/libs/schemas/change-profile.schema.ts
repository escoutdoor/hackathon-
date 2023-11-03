import z from 'zod'

export const changeProfileSchema = z.object({
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
	email: z.string().email({
		message: 'Email is invalid',
	}),
})

export type TChangeProfileSchema = z.infer<typeof changeProfileSchema>
