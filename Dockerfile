FROM node:16.20.0-alpine3.18

COPY . /app/

WORKDIR /app

COPY package*.json ./

EXPOSE 3000

RUN npm install

ENTRYPOINT ["npm", "run", "api"]