import { pokemonApi } from '@/apis/pokemon'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const reducer = combineReducers({
    [pokemonApi.reducerPath]: pokemonApi.reducer
  });

export const store = configureStore({
  reducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
})

