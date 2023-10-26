import { UserService } from '@/services/user/user.service'
import { IUser } from '@/shared/interfaces/user.interface'
import { useMutation } from '@tanstack/react-query'

export const useUpdateProfile = () => {
	const { mutate: updateProfile } = useMutation({
		mutationKey: ['update profile'],
		mutationFn: (data: IUser) => UserService.updateProfile(data),
	})

	return { updateProfile }
}
