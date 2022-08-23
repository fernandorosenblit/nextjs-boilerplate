import Head from 'next/head'
import Link from 'next/link'
import { useSelector } from 'react-redux'

import client from 'api/apiClient'
import { selectPokemons, setPokemons } from 'store/slices/pokemonsSlice'
import { wrapper } from 'store/store'
import { ApiListItem } from 'types/interfaces'

const PokemonListPage = () => {
  const pokemonsState = useSelector(selectPokemons)

  return (
    <div>
      <Head>
        <title>Pokemons (SSR Page)</title>
      </Head>
      <h2>Pokemons (SSR page)</h2>
      <hr />
      <ul>
        {pokemonsState?.pokemons?.results.map((pokemon: ApiListItem) => (
          <li key={pokemon.name}>
            <Link href={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      const { data } = await client.get('?limit=100&offset=0')
      await store.dispatch(setPokemons(data))
    } catch (error) {
      console.log(error)
    }
    return {
      props: {},
    }
  }
)

export default PokemonListPage
