import { instance } from '@/api/api.interceptor'
import { IUser } from '@/shared/interfaces/user.interface'

const USERS_URL = '/api/users'

export const UserService = {
	async getProfile() {
		return await instance<IUser>({
			method: 'GET',
			url: `${USERS_URL}/profile`,
		})
	},

	async updateProfile(data: IUser) {
		await instance<IUser>({
			method: 'PUT',
			url: `${USERS_URL}/profile`,
			data,
		})
	},
}
