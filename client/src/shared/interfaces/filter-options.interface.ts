export interface IFilterOptions {
	offerType?: EnumOfferType[]
	categories?: TCategory[]
	brands?: string[]
	searchTerm?: string
	sortBy?: EnumBrandSort
}

export enum EnumOfferType {
	STUDENT_DISCOUNT = 'STUDENT_DISCOUNT',
	GENERAL_SALE = 'GENERAL_SALE',
	FREEBIE = 'FREEBIE',
	COMPETITION = 'COMPETITION',
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

export enum EnumBrandSort {
	POPULARITY = 'popularity',
	DATE = 'date',
}
