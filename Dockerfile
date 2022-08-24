FROM public.ecr.aws/docker/library/node:16.13.0-alpine3.14
WORKDIR /usr/src/app
COPY . ./
RUN yarn
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
