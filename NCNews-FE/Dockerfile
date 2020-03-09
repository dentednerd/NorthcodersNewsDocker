FROM node:10.15.0-alpine
LABEL maintainer="Joanne Imlay"

WORKDIR /NCNews-FE
COPY package*.json /NCNews-FE/
RUN yarn

COPY . /NCNews-FE/
EXPOSE 3000
CMD ["yarn", "start"]
