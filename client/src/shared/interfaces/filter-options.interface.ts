export interface IFilterOptions {
	offerTypes?: OfferTypeSlug[]
	category?: CategorySlug
	searchTerm?: string
	sortBy?: SortByValue
	limit?: number
	brands?: string[]
}

export interface ICategory {
	name: string
	slug: CategorySlug
}

export interface IOfferType {
	name: string
	slug: OfferTypeSlug
}

export type SortByValue = 'popularity' | 'date'

export interface ISortBy {
	name: string
	value: SortByValue
}

export type OfferTypeSlug =
	| 'student-discount'
	| 'general-sale'
	| 'freebie'
	| 'competition'

export type CategorySlug =
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
