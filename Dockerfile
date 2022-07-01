FROM node:14-alpine AS build

WORKDIR /PrivateNote

COPY /PrivateNote/package*.json .

RUN npm install

COPY /PrivateNote .


# Second stage
FROM alpine:latest

RUN apk add curl

RUN apk add nodejs npm

WORKDIR /PrivateNote

COPY --from=build /PrivateNote .

EXPOSE 8080

CMD npm start
