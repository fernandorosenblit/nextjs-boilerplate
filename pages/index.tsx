/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import { checkUser, googleSignIn, signOut } from 'lib/auth'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nextjs Redux boilerplate</title>
      </Head>
      <h2>Nextjs Redux boilerplate</h2>
      <hr />
      <ul>
        <li>
          <Link href="/pokemon/list">Pokemons (SSR page)</Link>
        </li>
      </ul>
      <div>
        <button onClick={googleSignIn}>Login with google</button>
        <button onClick={signOut}>Logout</button>
        <button onClick={checkUser}>Check user</button>
      </div>
    </div>
  )
}

export default Home
