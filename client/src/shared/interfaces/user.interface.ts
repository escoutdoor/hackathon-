export interface IUser {
	id: string
	email: string

	firstName: string
	lastName: string

	avatarPath: string
	address?: IAddress

	favorites?: string[]
}

export interface IAddress {
	country?: string
	city?: string
	street?: string
}

export interface ICreateUserInfo {
	email: string

	firstName: string
	lastName: string

	password: string

	university: string
	graduationYear: number

	studentEmail: string

	dateOfBirth: Date | string
}

export interface ILoginInfo extends Pick<IUser, 'email'> {
	password: string
}
