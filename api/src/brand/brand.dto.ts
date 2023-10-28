import { EnumOfferType } from '@prisma/client'
import {
	ArrayMinSize,
	IsArray,
	IsEnum,
	IsOptional,
	IsString,
} from 'class-validator'

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
