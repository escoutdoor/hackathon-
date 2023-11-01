import { IOfferType, ISortBy } from './filter-options.interface'

export interface ISidebar {
	offerTypes: IOfferType[]
	brands: string[]
	sortBy: ISortBy[]
}
