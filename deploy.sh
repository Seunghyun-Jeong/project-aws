#!/bin/sh

git pull https://github.com/Seunghyun-Jeong/project2-deploy-api
cd /Users/seunghyun/codestates/project2-deploy-api

#yaml -> html
npm install -g redoc-cli
redoc-cli bundle -o index.html openapi.yaml

#ssh 접속
ssh -i /Users/seunghyun/codestates/seunghyunMac.pem ubuntu@ip-172-31-33-116

#scp 로컬 -> EC2
scp -i /Users/seunghyun/codestates/seunghyunMac.pem index.html ubuntu@ip-172-31-33-116:~/[transfer address]
scp -i /Users/seunghyun/codestates/seunghyunMac.pem Dockerfile ubuntu@ip-172-31-33-116:~/[transfer address]

