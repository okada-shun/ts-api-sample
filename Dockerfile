FROM node:14.17.4-alpine
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build
RUN apk add curl
RUN npx prisma generate
EXPOSE 8080
CMD node index.js