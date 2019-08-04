FROM openjdk:8-alpine

RUN mkdir /springboot-service

WORKDIR /springboot-service

COPY ./target/springboot-app-0.0.1-SNAPSHOT.jar .

CMD java -jar springboot-app-0.0.1-SNAPSHOT.jar

EXPOSE 8080