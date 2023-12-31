import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "~store/SideBar/SideBarSlice"; // ! <= именнованый редусер
import { setupListeners } from "@reduxjs/toolkit/query";
import {  usersApi } from "./RickMorty/service";
import { userInfoApi } from "./User/UserSlice"; 

export const store = configureStore({
  reducer: {
    sideBar: SideBarSlice,
    [usersApi.reducerPath]: usersApi.reducer,
    [userInfoApi.reducerPath]: userInfoApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware).concat(userInfoApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch);

