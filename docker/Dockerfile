FROM strapi/base

ARG PORT
RUN echo "${PORT}"

WORKDIR /app

COPY ./app/package.json ./

COPY ./app/yarn.lock ./

RUN yarn install

COPY ./app .

COPY .env.prod .env

ENV NODE_ENV=production 

RUN yarn build

# currentyly 1338
EXPOSE ${PORT} 

CMD ["yarn", "start"]