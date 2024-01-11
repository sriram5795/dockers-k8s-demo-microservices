# STAGE 1: Build Application
FROM amazoncorretto:21.0.1-al2023-headless AS builder

WORKDIR /springboot-app

COPY . .

RUN ./mvnw -U clean install && pwd && ls -lrth ./target && \
    mv ./target/springboot-app-*.jar ./target/springboot-app.jar && \
    ls -lrth ./target


###################################################################################################################
# STAGE 2: Setup Executable Application
###################################################################################################################
FROM amazoncorretto:21.0.1-al2023-headless

# RUN adduser -u 7788 -D appuser
# nobody is an existing user with least permissions
USER nobody

WORKDIR /springboot-app

COPY --chown=nobody:nobody --from=builder /springboot-app/target/springboot-app.jar /springboot-app/springboot-app.jar

RUN pwd && ls -lrth / && ls -lrth  /springboot-app

CMD java -jar /springboot-app/springboot-app.jar

EXPOSE 8080
