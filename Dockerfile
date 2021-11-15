### STAGE 1: Build ###
FROM node:12.7-alpine AS build
ARG app_name
WORKDIR /usr/src/app
COPY ./dist/apps/$app_name .

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
ARG config
COPY $config /etc/nginx/nginx.conf
COPY --from=build /usr/src/app /usr/share/nginx/html

####################### STANDALONE TEMPLATE ###########################

### STAGE 1: Build ###
#FROM node:12.7-alpine AS build
#WORKDIR /usr/src/app
#COPY package.json yarn.lock ./
#RUN yarn add @angular-architects/module-federation --save 
#RUN yarn
#COPY . .
#RUN node_modules/.bin/ng build --prod

### STAGE 2: Run ###
#FROM nginx:1.17.1-alpine
#COPY nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /usr/src/app/dist /usr/share/nginx/html

### STAGE 3: Build image ###
### > docker build -t wms-core . 

### STAGE 4: Start container ###
### > docker run --name wms-core -d -p localhost:80 wms-core 
