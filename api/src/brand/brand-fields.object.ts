import { returnDiscountFields } from 'src/discount/discount-fields.object'

export const returnBrandFields = {
	id: true,
	name: true,
	description: true,
	image: true,
	categoryName: true,
	offerTypeName: true,
	discounts: {
		select: returnDiscountFields,
	},
}
