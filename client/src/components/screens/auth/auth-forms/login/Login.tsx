'use client'
import { TLoginSchema, loginSchema } from '@/libs/schemas/login.schema'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC } from 'react'
import { useActions } from '@/hooks/useActions'
import Field from '@/components/ui/field/Field'
import Button from '@/components/ui/button/Button'

const Login: FC = () => {
	const { login } = useActions()

	const {
		register: register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm<TLoginSchema>({
		mode: 'onChange',
		resolver: zodResolver(loginSchema),
	})

	const onSubmit: SubmitHandler<TLoginSchema> = data => {
		login(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('email')}
				label="Email address"
				error={errors.email?.message}
				type="email"
				required
			/>
			<Field
				{...register('password')}
				label="Password"
				error={errors.password?.message}
				type="password"
				required
			/>
			<Button type="submit" disabled={!isValid}>
				Login
			</Button>
		</form>
	)
}

export default Login
