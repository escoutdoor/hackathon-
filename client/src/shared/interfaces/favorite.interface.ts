import { IDiscount } from './discount.interface'

export interface IFavorite {
	id: string
	createdAt: Date
	discount: IDiscount
}
