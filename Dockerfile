FROM node:carbon

ENV ROOT /src
RUN mkdir -p $ROOT
ADD . $ROOT
WORKDIR $ROOT
RUN npm install
CMD node server.js
EXPOSE 8086
