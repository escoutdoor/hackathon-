export interface IFilterOptions {
	offerTypes?: OfferTypeSlug[]
	category?: CategorySlug
	searchTerm?: string
	sortBy?: 'popularity' | 'date'
	limit?: number
	brands?: string[]
}

export interface ICategory {
	id: number
	name: string
	slug: CategorySlug
}

export interface IOfferType {
	id: string
	name: string
	slug: OfferTypeSlug
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
