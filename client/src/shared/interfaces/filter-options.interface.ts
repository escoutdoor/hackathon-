export interface IFilterOptions {
	offerType?: OfferType[]
	categories?: TCategory[]
	searchTerm?: string
	sortBy?: EnumBrandSort
}

export type OfferType =
	| 'student-discount'
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
