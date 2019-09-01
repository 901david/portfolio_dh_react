FROM node:alpine

WORKDIR "./db-server"

COPY package.json .

RUN npm install

COPY . .

CMD ["npm", "run", "start"] 