import { returnBrandFields } from 'src/brand/brand-fields.object'

export const returnCategoryFields = {
	id: true,
	name: true,
	slug: true,
	brands: {
		select: returnBrandFields,
	},
}
