import { useQuery } from '@tanstack/react-query'
import { useAuth } from './useAuth'
import { UserService } from '@/services/user/user.service'

export const useProfile = () => {
	const { user } = useAuth()

	const {
		data: profile,
		isLoading,
		error,
	} = useQuery({
		queryKey: ['profile', user?.id],
		queryFn: () => UserService.getProfile(),
		select: ({ data }) => data,
		enabled: !!user?.id,
	})

	return { profile, isLoading, error }
}
