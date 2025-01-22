import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userInformations } from './api/apiSlice'

export const store = configureStore({
  reducer: {
    [userInformations.reducerPath]: userInformations.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userInformations.middleware),
})

setupListeners(store.dispatch)
