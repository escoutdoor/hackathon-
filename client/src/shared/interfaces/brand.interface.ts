import { IDiscount } from './discount.interface'
import { ICategory, IOfferType } from './filter-options.interface'

export interface IBrand {
	id: string
	name: string
	description: string
	image: string
	category: ICategory
	offerType: IOfferType
	discounts: IDiscount[]
}

export interface IBrandImageNameId {
	id: string
	name: string
	image: string
}
