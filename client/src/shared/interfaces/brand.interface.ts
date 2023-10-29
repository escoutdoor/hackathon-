import { OfferType, TCategory } from './filter-options.interface'

export interface IBrand {
	id: string
	name: string
	description: string
	image: string
	categories: TCategory[]
	offerType: OfferType
}

export interface IBrandImageNameId {
	id: string
	name: string
	image: string
}
