FROM node:14 AS node

WORKDIR /app

COPY ../package.json package-lock.json ./

RUN npm ci

COPY .. .

RUN npm run build:prod

FROM nginx:1.19.6-alpine

COPY --from=node /app/dist/cp-sw-battles /usr/share/nginx/html
