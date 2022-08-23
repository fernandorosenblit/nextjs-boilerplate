/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    API_URL: process.env.API_URL,
    AWS_COGNITO_CLIENT_ID: process.env.AWS_COGNITO_CLIENT_ID,
    AWS_COGNITO_USER_POOL_ID: process.env.AWS_COGNITO_USER_POOL_ID,
    AWS_COGNITO_IDENTITY_POOL_ID: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
    AWS_COGNITO_REGION: process.env.AWS_COGNITO_REGION,
    AWS_COGNITO_DOMAIN: process.env.AWS_COGNITO_DOMAIN,
    AWS_COGNITO_REDIRECT_SIGNIN: process.env.AWS_COGNITO_REDIRECT_SIGNIN,
    AWS_COGNITO_REDIRECT_SIGNOUT: process.env.AWS_COGNITO_REDIRECT_SIGNOUT,
  },
}

module.exports = nextConfig
