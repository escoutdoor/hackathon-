import { IsString } from 'class-validator'

export class BrandDto {
	@IsString()
	name: string

	@IsString()
	description: string

	@IsString()
	image: string

	@IsString()
	offerTypeName: string

	@IsString()
	categoryName: string
}

export type TCategory =
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

// student discount | general sale | freebie | competition
