'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from '@/store/store'

function Providers({ children }: React.PropsWithChildren) {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	})

	return (
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				{children}
			</QueryClientProvider>
		</Provider>
	)
}

export default Providers
