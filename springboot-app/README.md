# Demo springboot-app

Create container image:
```shell
docker build --progress plain -t sriramponangi/demo-springboot-app .

# Alternative:
docker build --progress plain -t demo-springboot-app .
docker tag springboot-app sriramponangi/demo-springboot-app
```

Push image to DockerHub:
```shell
docker login
docker push sriramponangi/demo-springboot-app
```

Start container:
```shell
# Pre-requisite:
# ------------------
# Creating a network:
  docker network create -d bridge demoapps

  docker run -d -p 8080:8080 --name springboot-app --network demoapps springboot-app
```
