#!/bin/bash

docker system df

docker image prune -f
docker image prune -a -f

docker container prune -f
docker volume prune -f
docker network prune -f

docker system prune -f
docker system prune --volumes -f

# docker rmi $(docker images -q)

docker system df