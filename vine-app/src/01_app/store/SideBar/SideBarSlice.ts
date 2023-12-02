import { createSlice } from "@reduxjs/toolkit";


export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    //! state
    expanded: true,
    data: [
      // ! add icons to object
      {
        name: "Главная",
        root: true,
        url: "/",
      },
      {
        name: "Управление",
        root: true,
        url: "/objects",
        subItems: [
          {
            name: "Объекты",
            url: "/objects",
            root: false,
            subItems: [
              {
                name: "Редактировать",
                root: false,
                url: "/objects",
              },
              {
                name: "Создать",
                root: false,
                url: "/create_objects",
              },
            ],
          },
          {
            name: "Атрибуты",
            root: false,
            url: "/attr-dashbord",
            subItems: [
              {
                name: "Характеристики",
                root: false,
                url: "/attributes",
              },
              {
                name: "Категории",
                root: false,
                url: "/categories",
              },
              {
                name: "Адреса",
                root: false,
                url: "/addresses",
              },
            ],
          },
        ],
      },
      {
        name: "Заявки",
        root: true,
        url: "/request",
      },
      {
        name: "Блог",
        root: true,
        url: "/blog",
      },
      {
        name: "Организация",
        root: true,
        url: "/organiztions",
      },
      {
        name: "Пользователи",
        root: true,
        url: "/users",
        subItems: [
          {
            name: "Агенты",
            root: false,
            url: "/agents",
          },
          {
            name: "Клиенты",
            root: false,
            url: "/clients",
          },
          {
            name: "Мой профиль",
            root: false,
            url: "/users/myprofile",
          },
        ],
      },
    ],
    
  },
  reducers: {
    toggleSideBar: (state) => {
      state.expanded = !state.expanded;
    },
    getSideBarData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { toggleSideBar, getSideBarData } = sideBarSlice.actions;
export default sideBarSlice.reducer;
