'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import AuthProvider from '@/providers/AuthProvider'

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
			<PersistGate loading={null} persistor={persistor}>
				<QueryClientProvider client={queryClient}>
					<AuthProvider>{children}</AuthProvider>
				</QueryClientProvider>
			</PersistGate>
		</Provider>
	)
}

export default Providers
