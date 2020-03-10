FROM node:10.16.3-alpine
LABEL maintainer="Joey Imlay"
WORKDIR /app

COPY package*.json .
RUN yarn

COPY . /app

EXPOSE 3000
EXPOSE 8000

CMD ["node", "server.js"]
