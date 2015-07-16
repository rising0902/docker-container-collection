#!/usr/bin

docker build --rm -t local:mongo-express
docker run -it -d --link mongodb:mongodb -p 8080:8080 --name mongo-express local:mongo-express
