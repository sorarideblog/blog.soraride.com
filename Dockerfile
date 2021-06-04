FROM node:12.19.0-alpine3.12

WORKDIR /home/node/app
RUN apk update && apk add git
RUN apk add g++ make python3
RUN npm -g install gatsby-cli
EXPOSE 8000