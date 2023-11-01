import { returnCategoryFields } from 'src/category/category-fields.object'
import { returnDiscountFields } from 'src/discount/discount-fields.object'
import { returnOfferFields } from 'src/offer/offer-fields.object'

export const returnBrandFields = {
	id: true,
	name: true,
	description: true,
	image: true,
	discounts: {
		select: returnDiscountFields,
	},
	category: {
		select: returnCategoryFields,
	},
	offerType: {
		select: returnOfferFields,
	},
}
