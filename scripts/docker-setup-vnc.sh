#!/bin/bash

#docker pull consol/ubuntu-xfce-vnc

docker run -it \
    -p 5999:5901 -p 6901:6901 \
    --user $(id -u):$(id -g) \
    -e VNC_RESOLUTION=1024x768 \
    -e VNC_PW=202020tt \
    --shm-size=2gb \
    --restart=always \
    consol/ubuntu-xfce-vnc bash
