FROM node:10.15.0-alpine
LABEL maintainer="Joanne Imlay"

WORKDIR /NCNews-BE
COPY package*.json /NCNews-BE/
RUN yarn

COPY . /NCNews-BE/
RUN yarn add nodemon
EXPOSE 8000
EXPOSE 3090
CMD ["yarn", "start"]
