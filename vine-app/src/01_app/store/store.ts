import { configureStore } from '@reduxjs/toolkit'
import SideBarSlice from '~store/SideBar/SideBarSlice' // ! <= именнованый редусер
import { setupListeners } from '@reduxjs/toolkit/query'
import { rmApi } from './RickMorty/service'

export const store = configureStore({
  reducer: {
    sideBar: SideBarSlice,
    [rmApi.reducerPath]: rmApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rmApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)

