FROM node:10.16.3-alpine
LABEL maintainer="Joey Imlay"
WORKDIR /app/client

COPY package*.json .
RUN yarn

COPY . /app/client

EXPOSE 3000
EXPOSE 8000

CMD ["yarn", "build"]
