FROM node:10

WORKDIR /usr/src/app/serverBase

COPY package*.json ./

RUN npm install

EXPOSE 3001

CMD ["npm", "start"]
