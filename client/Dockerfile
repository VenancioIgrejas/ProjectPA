FROM node:alpine

WORKDIR /usr/src/app/client

COPY package*.json ./

RUN yarn install

EXPOSE 3000

CMD ["yarn", "start"]
