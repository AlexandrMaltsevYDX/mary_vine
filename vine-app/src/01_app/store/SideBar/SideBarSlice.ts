import { createSlice } from '@reduxjs/toolkit'

export interface SideBar {
  expanded: boolean
}

export interface SideBarData {
  data: Array<string>,
}

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: { //! state
    expanded: false,
    data: ["a", "b", "c"]
  },
  reducers: {
    toggleSideBar: (state) => {
      state.expanded = !state.expanded
    },
    getSidbarData: (state, action) => {
      state.data = action.payload
    }
  },
})

export const {toggleSideBar, getSidbarData} = sideBarSlice.actions
export default sideBarSlice.reducer
