ARG SPW_NEXUS_REGISTRY=docker.io

FROM $SPW_NEXUS_REGISTRY/node:latest as build
WORKDIR /usr/local/app
COPY ./ /usr/local/app/
RUN npm install
RUN npm run build-compose

FROM $SPW_NEXUS_REGISTRY/nginx:latest
COPY --from=build /usr/local/app/dist/asbfront/browser /usr/share/nginx/html
EXPOSE 80