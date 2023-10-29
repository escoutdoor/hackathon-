import { IBrandImageNameId } from './brand.interface'

export interface IDiscount {
	id: string
	name: string
	image: string
	description: string
	brand: IBrandImageNameId
}

export interface IDiscountResponse {
	discounts: IDiscount[]
	length: number
}
