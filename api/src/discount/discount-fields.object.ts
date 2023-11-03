export const returnDiscountFields = {
	id: true,
	name: true,
	description: true,
	image: true,
	brandName: true,
	conditions: true,
	brand: {
		select: {
			id: true,
			name: true,
			image: true,
			offerTypeName: true,
			categoryName: true,
		},
	},
}
