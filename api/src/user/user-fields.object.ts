export const returnUserFields = {
	id: true,
	email: true,
	firstName: true,
	lastName: true,
	avatarPath: true,
	password: false,
	dateOfBirth: true,
	address: {
		select: {
			country: true,
			city: true,
			street: true,
			phone: true,
		},
	},
	student: {
		select: {
			email: true,
			university: true,
			graduationYear: true,
		},
	},
	favorites: true,
}
