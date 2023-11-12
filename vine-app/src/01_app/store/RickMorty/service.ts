// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ResourceBase {
    id: number
    name: string
    url: string
    created: string
}


export interface CharacterLocation {
    name: string
    url: string
}

export interface Character extends ResourceBase {
    status: 'Dead' | 'Alive' | 'unknown'
    species: string
    type: string
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
    origin: CharacterLocation
    location: CharacterLocation
    image: string
    episode: string[]
}

// Define a service using a base URL and expected endpoints
export const rmApi = createApi({
    reducerPath: 'rmApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/' }),
    endpoints: (builder) => ({
        getCharters: builder.query<{results: Character[]}, void>({
            // query: (name) => `character/${name}`,
            query: () => `character/`,
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints 
// назвать вручную  use....автогенерате не пугаться
export const { useGetChartersQuery } = rmApi