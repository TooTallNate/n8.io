FROM mhart/alpine-node:10.8.0
WORKDIR /usr/src
COPY package.json .
RUN yarn
COPY . .
RUN yarn build && yarn export -o /public
