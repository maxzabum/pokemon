import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {  PokemonForm } from 'pokenode-ts';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  endpoints: (builder) => ({
    getPokemonForm: builder.query<PokemonForm, number | string>({
      query: (keyword) => `pokemon-form/${keyword}`,
    }),
  }),
});

export const { useGetPokemonFormQuery } = pokemonApi;