# Demo nodejs-app


### Creating the nodejs-app project
```shell
$ npm init

This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (nodejs-app)
version: (1.0.0)
description: Node.js(Express.js) Demo app for dockers demo
entry point: (index.js) app.js
test command:
git repository: git@github.com:sriram-ponangi/dockers-k8s-demo-microservices.git
keywords:
author: Sriram Ponangi
license: (ISC)
About to write to D:\3. Full Stack Dev\Microservices\SpringBoot\dockers-k8s-demo-microservices\nodejs-app\package.json:

{
  "name": "nodejs-app",
  "version": "1.0.0",
  "description": "Node.js(Express.js) Demo app for dockers demo",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+ssh://git@github.com/sriram-ponangi/dockers-k8s-demo-microservices.git"
  },
  "author": "Sriram Ponangi",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/sriram-ponangi/dockers-k8s-demo-microservices/issues"
  },
  "homepage": "https://github.com/sriram-ponangi/dockers-k8s-demo-microservices#readme"
}


Is this OK? (yes) yes
npm notice
npm notice New minor version of npm available! 10.2.4 -> 10.3.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.3.0
npm notice Run npm install -g npm@10.3.0 to update!
npm notice
```


### Install the required dependencies for project setup:
```shell
npm install express@^4.18.2
npm install cors@^2.8.5
npm install redis@^2.8.0

# Note a higher version of redis client library node.js will required code upgrade
# npm install redis@^4.6.12

npm install response-time@^2.3.2

# Alternavtive
npm install
```


### Execute the app:
```shell
npm start
```

### Creating container image:
```shell
docker build --progress plain -t sriramponangi/demo-nodejs-app .

# Alternative:
docker build --progress plain -t demo-nodejs-app .
docker tag nodejs-app sriramponangi/demo-nodejs-app
```

### Push image to DockerHub:
```shell
docker login
docker push sriramponangi/demo-nodejs-app
```

### Start container:
```shell
# Pre-requisite:
# ------------------
# Creating a network:
  docker network create -d bridge demoapps
# Creating a Volume:
  docker volume create demoapp-redis-data
  docker volume inspect demoapp-redis-data
# Running a container:
  docker run -d -v  demoapp-redis-data:/data --network demoapps --name redis redis/redis-stack:7.2.0-v6-x86_64
  # Alternative:
  docker run -d -v  demoapp-redis-data:/data --network demoapps --name redis -p 6379:6379 -p 8001:8001 redis/redis-stack:7.2.0-v6-x86_64


  docker run -d -p 3000:3000 --name nodejs-app --network demoapps sriramponangi/demo-nodejs-app
```

