import { IUser } from '@/shared/interfaces/user.interface'

export const getName = (user: IUser): string => {
	if (!user) {
		return ''
	}

	return `${user.firstName} ${user.lastName}`
}
