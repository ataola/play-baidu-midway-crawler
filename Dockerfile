FROM node:fermium
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --registry=https://registry.npm.taobao.org
COPY . /usr/src/app
EXPOSE 8090
CMD ["npm", "run", "dev"]
