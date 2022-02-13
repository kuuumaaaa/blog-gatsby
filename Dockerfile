FROM node:15.3.0-alpine3.10
WORKDIR /usr/src/app
EXPOSE 8000
RUN apk update && \
    apk --update add git python2 make g++ vips-dev fftw-dev --no-cache && \
    rm -fR /var/cache/apk/* && \
    npm install -g gatsby-cli

COPY ./app .
RUN npm install
CMD ["gatsby", "develop", "--host", "0.0.0.0" ]
