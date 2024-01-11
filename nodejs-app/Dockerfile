FROM node:20.11.0-alpine3.19

WORKDIR /nodejs-app

# Performing npm install only with package.json and package-lock.json files 
# to create a separate layer in docker build process for downloading dependencies into node_modules package.
# This prevents the unnecessary npm installs at each build by using the cached stage from previous builds.
COPY package.json ./
RUN pwd && ls -lrt &&  npm cache clean --force && npm install && ls -lrt

COPY src ./src

EXPOSE 3000

CMD ["npm", "start"]