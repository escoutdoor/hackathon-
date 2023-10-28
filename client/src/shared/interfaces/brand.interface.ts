import { OfferType, TCategory } from './filter-options.interface'

export interface IBrand {
	id: string
	name: string
	description: string
	image: string
	categories: TCategory[]
	offerType: OfferType
}

export interface IBrandResponse {
	brands: IBrand[]
	length: number
}
