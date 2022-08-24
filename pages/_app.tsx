import Amplify, { Hub } from 'aws-amplify'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import awsConfig from 'config/awsConfig'
import { wrapper } from 'store/store'

import 'styles/globals.css'

Amplify.configure(awsConfig)

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Hub.listen('auth', (data) => {
      const { payload } = data
      console.log('A new auth event has happened: ', data)
      if (payload.event === 'signIn') {
        console.log('a user has signed in!')
      }
      if (payload.event === 'signOut') {
        console.log('a user has signed out!')
      }
    })
  }, [])

  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
