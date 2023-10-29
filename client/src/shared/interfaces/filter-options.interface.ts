export interface IFilterOptions {
	offerTypes?: OfferType[]
	category?: TCategory
	searchTerm?: string
	sortBy?: 'popularity' | 'date'
	limit?: number
	brands?: string[]
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
