FROM ubuntu:latest

MAINTAINER ZelikSV <zeliksv@gmail.com>

RUN apt-get update && apt-get install cowsay curl nginx -y \
    && ln -s /usr/games/cowsay /usr/bin/cowsay \
    && curl -sL https://deb.nodesource.com/setup_11.x | bash - \
    && apt-get install -y nodejs

WORKDIR /usr/app

COPY . ./

COPY ./nginx.conf /etc/nginx/conf.d/converter.conf

RUN npm install

RUN npm run build

EXPOSE 90

CMD cowsay 'All perfectly. The assembly is ready for use my lord' && nginx -g 'daemon off;'

#docker run --env-file .env.production -it -p 1234:90 zelik/app
