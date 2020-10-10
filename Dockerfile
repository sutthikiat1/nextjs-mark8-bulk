FROM node:12-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN yarn install
COPY . /usr/src/app
ENV PORT=3000 NODE_ENV='production' STATUS_PROJECT='production'
RUN yarn build 
CMD [ "npm", "start" ]