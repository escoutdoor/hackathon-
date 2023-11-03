import { IsEmail, IsOptional, IsPhoneNumber, IsString } from 'class-validator'

export class AddressDto {
	@IsOptional()
	@IsString()
	country?: string

	@IsOptional()
	@IsString()
	city?: string

	@IsOptional()
	@IsString()
	street?: string

	@IsOptional()
	@IsPhoneNumber()
	phone?: string
}

export class UserDto {
	@IsOptional()
	@IsString()
	firstName: string

	@IsOptional()
	@IsString()
	lastName?: string

	@IsString()
	@IsEmail()
	email: string

	@IsOptional()
	@IsString()
	password: string

	@IsOptional()
	address?: AddressDto

	@IsOptional()
	@IsString()
	avatarPath?: string
}
