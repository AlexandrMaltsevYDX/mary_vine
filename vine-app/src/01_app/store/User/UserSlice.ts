import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export interface UserInfoInterface {
    id: number;
    name: string;
    avatar: string;
  }
  
export interface UserLoginInterface {
    email: string;
    password: string;
}

export interface UserLoginResposeInterface {
    token: string;
}

export interface ExapleInterface extends UserLoginResposeInterface{
    email: string;
    password: string;
}


export const userInfoApi = createApi({
    reducerPath: "userInfoApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/",
        prepareHeaders: headers => {
          const token = window.localStorage.getItem("token");
          if (token) {
            headers.set("authorization", `Bearer ${token}`);
          }
          return headers;
        },
      }),
    endpoints: (build) => ({
        getToken:  build.mutation<UserLoginResposeInterface, UserLoginInterface >({ // < ------ useGetTokenMutation
          query: ({email, password}) => ({
            url:  `login`,
            method: 'POST',
            body: 
                {
                    id: 3,
                    email: email,
                    password: password
                }
          }),
          transformResponse: (response: ExapleInterface, meta, arg) => {
            
            const {token} = response;
            window.localStorage.setItem("token", token)
            console.log(response)
            return response
          },
        }),

    
})})


export const {useGetTokenMutation} = userInfoApi;
