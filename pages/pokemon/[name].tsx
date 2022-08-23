/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import client from 'api/apiClient'
import { Pokemon } from 'types/interfaces'

const PokemonPage = ({ pokemon }: { pokemon?: Pokemon }) => {
  return (
    <div>
      <Head>
        <title>SSG Page</title>
      </Head>
      <h2>SSG page</h2>
      <hr />
      <h3>{pokemon?.name}</h3>
      {pokemon?.sprites.frontDefault && (
        <Image
          src={pokemon?.sprites.frontDefault}
          alt={`${pokemon?.name} image`}
          width={100}
          height={100}
        />
      )}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const { data } = await client.get(`${ctx.params?.name}`)
    return {
      props: { pokemon: data },
    }
  } catch (error) {
    console.log(error)
  }
  return {
    props: {},
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.get(`?limit=100&offset=0`)
  const paths = data?.results?.map((pokemon: Pokemon) => ({
    params: { name: pokemon.name },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default PokemonPage
