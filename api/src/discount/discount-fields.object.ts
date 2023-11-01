export const returnDiscountFields = {
	id: true,
	name: true,
	description: true,
	image: true,
	brandName: true,
	brand: {
		select: {
			id: true,
			name: true,
			image: true,
		},
	},
}
