import { EnumOfferType, TCategory } from './filter-options.interface'

export interface IBrand {
	id: string
	name: string
	description: string
	image: string
	categories: TCategory[]
	offerType: EnumOfferType
}

export interface IBrandResponse {
	brands: IBrand[]
	length: number
}
