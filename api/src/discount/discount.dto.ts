import {
	ArrayMinSize,
	IsOptional,
	IsString,
	MinLength,
	minLength,
} from 'class-validator'

export type DiscountTypes = 'st'

export class getAllDto {
	@IsOptional()
	@IsString()
	searchTerm?: string
	sortBy: EnumDiscountSort
	@IsOptional()
	@IsString()
	limit?: string
	@IsOptional()
	@IsString()
	page?: string
}

export enum EnumDiscountSort {
	POPULARITY = 'popularity',
	DATE = 'date',
}

export class DiscountDto {
	@MinLength(3, {
		message: 'Discount name is too short',
	})
	@IsString()
	name: string
	@IsString()
	image?: string
	@IsString()
	description: string
}
