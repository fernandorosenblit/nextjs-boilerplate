import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth'
import { Auth } from 'aws-amplify'

export const signUp = async (email: string, password: string) => {
  try {
    await Auth.signUp({ username: email, password, attributes: { email } })
  } catch (err) {
    console.log({ err })
  }
}
export const confirmSignUp = async (
  email: string,
  authCode: string,
  password: string
) => {
  try {
    await await Auth.confirmSignUp(email, authCode)
    await Auth.signIn(email, password)
  } catch (err) {
    console.log({ err })
  }
}
export const signIn = async (email: string, password: string) => {
  try {
    await Auth.signIn(email, password)
  } catch (err) {
    console.log({ err })
  }
}

export const googleSignIn = () =>
  Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })

export const forgotPassword = async (email: string) => {
  try {
    await Auth.forgotPassword(email)
  } catch (err) {
    console.log({ err })
  }
}
export const forgotPasswordSubmit = async (
  email: string,
  authCode: string,
  password: string
) => {
  await Auth.forgotPasswordSubmit(email, authCode, password)
}

export const checkUser = async () => {
  const user = await Auth.currentAuthenticatedUser()
  console.log(user)

  return user
}

export const signOut = async () => Auth.signOut()
