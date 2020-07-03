FROM node:10
RUN mkdir -p /usr/src/monit
WORKDIR /usr/src/monit
COPY package*.json ./
RUN npm install
copy . .
CMD [ "node", "index.js" ]