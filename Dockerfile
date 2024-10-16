# Node configs
FROM node:20-alpine3.20 as build-stage
WORKDIR /oncoknowedge
COPY package.json  ./
COPY . .
RUN npm install
RUN npm run build


FROM nginx:1.27-alpine AS production-stage
COPY --from=build-stage /oncoknowedge/dist/oncoknowedge/browser /usr/share/nginx/html
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]