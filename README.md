<img src="./public/logo.svg" alt="UnPress logo" align="center">

#

![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-a)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

- First install all the packages in the dependencies of the project.

```bash
yarn
```

- Next create a `.env.local` file in the root of your project and insert your key/value pairs in the following format of `KEY=VALUE`:

```bash
API_URL=
NODE_ENV=development

AWS_COGNITO_CLIENT_ID=
AWS_COGNITO_USER_POOL_ID=
AWS_COGNITO_IDENTITY_POOL_ID=
AWS_COGNITO_REGION=
AWS_COGNITO_DOMAIN=
AWS_COGNITO_REDIRECT_SIGNIN=http://localhost:3000
AWS_COGNITO_REDIRECT_SIGNOUT=http://localhost:3000
```

- Then run the development server:

```bash
yarn
yarn dev
```

- Last (but not least) open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
