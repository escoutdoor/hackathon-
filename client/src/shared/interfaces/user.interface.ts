export interface IUser {
	id: string
	email: string

	firstName: string
	lastName: string

	avatarPath: string

	dateOfBirth: Date | string

	student: IStudent

	address?: IAddress

	favorites?: string[]
}

export interface IStudent {
	email: string
	university: string

	graduationYear: number
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
	graduationYear: string

	studentEmail: string

	dateOfBirth: Date | string
}

export interface ILoginInfo extends Pick<IUser, 'email'> {
	password: string
}
