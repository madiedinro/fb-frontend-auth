FROM node:10-alpine as builder

WORKDIR /build

COPY package.json .
COPY yarn.lock .

RUN yarn install \
  && yarn cache clean

COPY . .
ENV NODE_ENV=production

RUN yarn build

FROM alpine:3.8

VOLUME  /usr/share/fb-frontend-auth
WORKDIR /usr/share/fb-frontend-auth

COPY --from=builder /build/dist /usr/share/fb-frontend-auth

CMD ["/bin/ls", "/usr/share/fb-frontend-auth"]

