FROM node:12-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
RUN npm install
COPY . /usr/src/app
ENV PORT=8080 NODE_ENV='production' STATUS_PROJECT='production'
RUN npm run build
CMD [ "npm", "start" ]