export interface IFilterOptions {
	offerType?: OfferType[]
	categories?: TCategory[]
	brands?: string[]
	searchTerm?: string
	sortBy?: EnumBrandSort
}

export type OfferType =
	| 'STUDENT_DISCOUNT'
	| 'general-sale'
	| 'freebie'
	| 'competition'

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
