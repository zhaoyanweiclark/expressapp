FROM node:16.20.0-alpine3.17 as builder

WORKDIR /srv

ADD package-lock.json package-lock.json
ADD package.json package.json

RUN npm install

ADD routes routes
ADD services services
ADD postgres postgres
ADD app.js app.js

RUN npm install -g pm2

CMD ["pm2-runtime", "start", "npm", "--", "run", "start"]
