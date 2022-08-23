import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { AppState } from 'store/store'
import { ApiListItem, ApiPage } from 'types/interfaces'

export interface PokemonsState {
  pokemons: ApiPage<ApiListItem> | null
}

const initialState: PokemonsState = {
  pokemons: null,
}

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemons(state, action) {
      state.pokemons = action.payload
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.pokemons,
      }
    },
  },
})

export const { setPokemons } = pokemonsSlice.actions

export const selectPokemons = (state: AppState) => state.pokemons

export default pokemonsSlice.reducer
