import { useDispatch } from 'react-redux'
import * as userActions from '@/store/user/user.actions'
import { useMemo } from 'react'
import { bindActionCreators } from '@reduxjs/toolkit'

const rootActions = {
	...userActions,
}

export const useActions = () => {
	const dispatch = useDispatch()

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch])
}
