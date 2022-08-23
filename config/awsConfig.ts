const awsConfig = {
  aws_project_region: process.env.AWS_COGNITO_REGION,
  aws_cognito_identity_pool_id: process.env.AWS_COGNITO_IDENTITY_POOL_ID,
  aws_cognito_region: process.env.AWS_COGNITO_REGION,
  aws_user_pools_id: process.env.AWS_COGNITO_USER_POOL_ID,
  aws_user_pools_web_client_id: process.env.AWS_COGNITO_CLIENT_ID,
  oauth: {
    domain: process.env.AWS_COGNITO_DOMAIN,
    scope: ['email', 'openid', 'profile'],
    redirectSignIn: process.env.AWS_COGNITO_REDIRECT_SIGNIN,
    redirectSignOut: process.env.AWS_COGNITO_REDIRECT_SIGNOUT,
    responseType: 'code',
  },
  federationTarget: 'COGNITO_USER_POOLS',
}

export default awsConfig
