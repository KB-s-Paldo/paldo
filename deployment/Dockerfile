# 실행파일 빌드
FROM node:lts-alpine as build-stage
MAINTAINER paldo
WORKDIR /app
ADD . .
RUN npm install
# 실행파일복사 & nginx실행
RUN npm run build
FROM nginx:stable-alpine
COPY  ./deployment/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN ls /usr/share/nginx/html
EXPOSE 8000
CMD ["nginx", "-g", "daemon off;"]