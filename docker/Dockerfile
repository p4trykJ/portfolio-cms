FROM strapi/base

ARG PORT
RUN echo "${PORT}"

WORKDIR /app

COPY ./app/package.json ./

COPY ./app/yarn.lock ./

RUN yarn install

COPY ./app .

ENV NODE_ENV=production  NODE_OPTIONS=--max-old-space-size=4096

RUN yarn build

# currentyly 1338
EXPOSE ${PORT} 

CMD ["yarn", "start"]