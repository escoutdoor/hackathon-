import {
	ArrayMinSize,
	IsArray,
	IsOptional,
	IsString,
	MinLength,
} from 'class-validator'

export class DiscountDto {
	@MinLength(3, {
		message: 'Discount name is too short',
	})
	@IsString()
	name: string

	@IsArray()
	@IsString({ each: true })
	description: string[]

	@IsString()
	image: string

	@IsOptional()
	@IsString()
	discountCode?: string

	@IsString()
	url: string

	@IsOptional()
	@IsArray()
	@IsString({ each: true })
	conditions?: string[]

	@IsString()
	brandName: string
}
