import { combineReducers, configureStore } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import {
	persistReducer,
	persistStore,
	FLUSH,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	REHYDRATE,
} from 'redux-persist'
import { userSlice } from './user/userSlice'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: [],
}

const rootReducer = combineReducers({
	user: userSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					FLUSH,
					REHYDRATE,
					PAUSE,
					PERSIST,
					PURGE,
					REGISTER,
				],
			},
		}),
})

export const persistor = persistStore(store)

export type TypeRootState = ReturnType<typeof rootReducer>
