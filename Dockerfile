FROM node:10-alpine as builder

WORKDIR /build

COPY package.json .
COPY yarn.lock .

RUN yarn install \
  && yarn cache clean

COPY . .
ENV NODE_ENV=production

RUN yarn build

FROM caddy as caddy_builder

FROM alpine:3.8

VOLUME  /usr/share/fb-frontend-auth
WORKDIR /usr/share/fb-frontend-auth

COPY --from=builder /build/dist /usr/share/fb-frontend-auth

COPY --from=caddy_builder /usr/bin/caddy /usr/bin/caddy
COPY --from=caddy_builder /bin/parent /bin/parent
COPY Caddyfile /etc/Caddyfile
# Let's Encrypt Agreement
ENV ACME_AGREE="false"

# Telemetry Stats
ENV ENABLE_TELEMETRY="false"
WORKDIR /usr/share/fb-frontend-auth

ENTRYPOINT [ "/bin/parent", "caddy" ]
CMD ["--conf", "/etc/Caddyfile", "--log", "stdout", "--agree=$ACME_AGREE"]
