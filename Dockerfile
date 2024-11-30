FROM node:20-alpine

WORKDIR /usr/src

COPY /src .

RUN npm i

CMD ["node", "app.js"]
