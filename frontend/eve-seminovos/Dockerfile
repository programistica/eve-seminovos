FROM node:21.1.0

WORKDIR /eve-seminovos

COPY package.json package.json

RUN npm install

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["npm", "run", "start"]



