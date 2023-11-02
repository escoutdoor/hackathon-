import { Transform } from 'class-transformer'
import { IsEmail, IsInt, IsString, Min, MinLength } from 'class-validator'

export class LoginDto {
	@IsString()
	@IsEmail()
	email: string

	@IsString()
	password: string
}

export class RegisterDto {
	@IsString()
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password must be at least 6 characters long',
	})
	@IsString()
	password: string

	@MinLength(3, {
		message: 'First name must be at least 3 characters long',
	})
	@IsString()
	firstName: string

	@MinLength(3, {
		message: 'Last name must be at least 3 characters long',
	})
	@IsString()
	lastName: string

	@IsString()
	@IsEmail()
	studentEmail: string

	@IsString()
	university: string

	@IsInt()
	@Transform(({ value }) => +value)
	@Min(2023, {
		message: 'Graduation year must be at least 2023',
	})
	graduationYear: number
}
