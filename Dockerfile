# Using an older base image to trigger container findings for the demo
FROM node:16

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 3000
CMD [ "node", "app.js" ]
