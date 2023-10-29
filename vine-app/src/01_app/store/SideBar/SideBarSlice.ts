import { createSlice } from "@reduxjs/toolkit";

const sidebarData = [
  // ! add icons to object
  {
    name: "Главная",
    url: "/",
  },
  {
    name: "Управление Объектами",
    url: "/objects",
    subItems: [
      {
        name: "Объекты",
        url: "/objects",
        subItems: [
          {
            name: "Редактировать",
            url: "/objects",
          },
          {
            name: "Создать",
            url: "/create_objects",
          },
        ],
      },
      {
        name: "Атрибуты",
        url: "/attr-dashbord",
        subItems: [
          {
            name: "Характеристики",
            url: "/attributes",
          },
          {
            name: "Категории",
            url: "/categories",
          },
          {
            name: "Адреса",
            url: "/addresses",
          },
        ],
      },
    ],
  },
  {
    name: "Заявки",
    url: "/request",
  },
  {
    name: "Блог",
    url: "/blog",
  },
  {
    name: "Организация",
    url: "/organiztions",
  },
  {
    name: "Пользователи",
    url: "/users",
    subItems: [
      {
        name: "Агенты",
        url: "/agents",
      },
      {
        name: "Клиенты",
        url: "/clients",
      },
      {
        name: "Мой профиль",
        url: "/my_profile",
      },
    ],
  },
];

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState: {
    //! state
    expanded: false,
    data: [
      // ! add icons to object
      {
        name: "Главная",
        root: true,
        url: "/",
      },
      {
        name: "Управление Объектами",
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
            url: "/my_profile",
          },
        ],
      },
    ],
  },
  reducers: {
    toggleSideBar: (state) => {
      state.expanded = !state.expanded;
    },
    getSidbarData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { toggleSideBar, getSidbarData } = sideBarSlice.actions;
export default sideBarSlice.reducer;
