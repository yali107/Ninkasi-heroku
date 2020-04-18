FROM node:10.20-buster

WORKDIR /usr/src/client

ENV PATH /usr/src/client/node_modules/.bin:$PATH

COPY package.json /usr/src/client/package.json
COPY . /usr/src/client
RUN npm install -g @angular/cli@8.3.0
RUN npm install

CMD ng serve --host 0.0.0.0

