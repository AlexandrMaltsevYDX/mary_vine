import {createSlice} from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    //! state
    expanded: true,
    data: [
      // ! add icons to object
      {
        name: "Калькулятор",
        root: true,
        url: "/",
        subItems: [
          {
            name: "+ Новый расчет",
            root: false,
            url: "/calculator/new_count",
          },
        ],
      },
    ],
  },
  reducers: {
    toggleSideBar: state => {
      state.expanded = !state.expanded;
    },
    getSideBarData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const {toggleSideBar, getSideBarData} = sideBarSlice.actions;
export default sideBarSlice.reducer;
