FROM node:14 AS node

EXPOSE 80

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

ENV PATH="./node_modules/.bin:$PATH"

COPY . ./
RUN npm run build --prod

FROM nginx:1.19.6-alpine
#COPY docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/dist/cp-sw-battles /usr/share/nginx/html
