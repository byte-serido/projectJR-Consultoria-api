FROM node:18.12.1

WORKDIR /usr/app

COPY package*.json ./

RUN npm i

COPY . .

EXPOSE 3000

CMD npm start