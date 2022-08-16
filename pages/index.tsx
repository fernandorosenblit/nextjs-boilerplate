/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import { wrapper } from '@store/index'
import { selectPokemons, setPokemons } from '@store/pokemonsSlice'

const Home: NextPage = () => {
  const pokemonsState = useSelector(selectPokemons)

  return (
    <div>
      <ul>
        {pokemonsState.pokemons.results?.map((pokemon: any) => (
          <li key={pokemon.name}>
            <Link href={`pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      const res = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
      )
      const pokemons = await res.json()
      await store.dispatch(setPokemons(pokemons))
    } catch (error) {
      console.log(error)
    }
    return {
      props: {},
    }
  }
)

export default Home
