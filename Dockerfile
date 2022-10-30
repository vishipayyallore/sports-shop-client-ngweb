# base image
FROM node:16.17.0

ARG WORKINGDIRECTORY=/app

# set working directory
WORKDIR ${WORKINGDIRECTORY}

# install and cache app dependencies
COPY package.json ${WORKINGDIRECTORY}/package.json
COPY package-lock.json ${WORKINGDIRECTORY}/package-lock.json

RUN npm install -g @angular/cli@14.2.7

RUN npm install

# add app
COPY . ${WORKINGDIRECTORY}

EXPOSE 4200

# start app
CMD ng serve --host 0.0.0.0