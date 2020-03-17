FROM node:13-alpine
COPY . /home/node/app
WORKDIR /home/node/app
RUN yarn

CMD node -v && yarn start
