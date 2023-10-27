export const returnUserFields = {
	id: true,
	email: true,
	firstName: true,
	lastName: true,
	avatarPath: true,
	password: false,
	address: {
		select: {
			country: true,
			city: true,
			street: true,
			phone: true,
		},
	},
	favorites: true,
}
