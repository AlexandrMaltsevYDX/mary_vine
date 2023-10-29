import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface SideBar {
  expanded: boolean
}

export interface SideBarData {
  data: Array<string>,
}

// const TOGGLE_SIDEBAR = 'SHOW_SIDEBAR' //! action

// export function toggleSidebar(isShow) { //! action
//   return {
//     type: TOGGLE_SIDEBAR,
//     payload: { isShow },
//   }
// }

// export const getSidbarData = (data: SideBarData) => { //! action
//   return {
//     type: SIDBAR_DATA,
//     payload : { data }
//   }
// }



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
