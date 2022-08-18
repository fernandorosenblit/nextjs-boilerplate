/* eslint-disable @typescript-eslint/no-explicit-any */
import type { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const PokemonPage = ({ pokemon }: { pokemon?: any }) => {
  return (
    <div>
      <Head>
        <title>SSG Page</title>
      </Head>
      <h2>SSG page</h2>
      <hr />
      <h3>{pokemon?.name}</h3>
      <Image
        src={pokemon.sprites.front_default}
        alt={`${pokemon.name} image`}
        width={100}
        height={100}
      />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${ctx.params?.name}`
    )
    const pokemon = await res.json()
    return {
      props: { pokemon },
    }
  } catch (error) {
    console.log(error)
  }
  return {
    props: {},
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'
  )
  const pokemons = await res.json()
  const paths = pokemons?.results?.map((pokemon: any) => ({
    params: { name: pokemon.name },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default PokemonPage
