FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN printf "VITE_API_BASE_URL=%s\nVITE_SOCKET_URL=%s\nVITE_NODE_ENV=%s\n" \
  "$VITE_API_BASE_URL" "$VITE_SOCKET_URL" "$VITE_NODE_ENV" > .env.production
RUN npm run build

FROM nginx:1.27.4

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

ENV PORT=80

CMD ["/bin/sh", "-c", "envsubst '${PORT}' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]