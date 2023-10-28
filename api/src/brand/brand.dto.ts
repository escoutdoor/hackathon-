import { EnumOfferType } from '@prisma/client'
import { Transform } from 'class-transformer'
import {
	ArrayMinSize,
	IsArray,
	IsEnum,
	IsOptional,
	IsString,
} from 'class-validator'

export class GetBrandsDto {
	@IsOptional()
	@IsEnum(EnumOfferType)
	offerType?: EnumOfferType[]

	@IsOptional()
	@IsString()
	categories: string

	@IsOptional()
	@IsString()
	searchTerm?: string

	@IsOptional()
	@IsString()
	sortBy?: 'popularity' | 'date'
}

export class BrandDto {
	@IsString()
	name: string

	@IsString()
	description: string

	@IsString()
	image: string

	@IsOptional()
	@IsEnum(EnumOfferType)
	offerType: EnumOfferType

	@IsArray()
	@IsString({ each: true })
	@ArrayMinSize(1)
	categories: TCategory[]
}

export type TCategory =
	| 'trending-now'
	| 'fashion'
	| 'food-drink'
	| 'tech-mobile'
	| 'beauty'
	| 'health-fitness'
	| 'travel'
	| 'entertainment'
	| 'gifts-flowers'
	| 'finance'
	| 'home-utilities'
	| 'books-mags-news'
	| 'all'
