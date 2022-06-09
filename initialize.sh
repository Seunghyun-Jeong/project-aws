#!/bin/sh

#yaml -> html
npm install -g redoc-cli
redoc-cli bundle -o index.html openapi.yaml

#scp 로컬 -> EC2
scp -i /Users/seunghyun/codestates/seunghyunMac.pem index.html ubuntu@ec2-52-79-54-197.ap-northeast-2.compute.amazonaws.com:~/project2
scp -i /Users/seunghyun/codestates/seunghyunMac.pem Dockerfile ubuntu@ec2-52-79-54-197.ap-northeast-2.compute.amazonaws.com:~/project2
scp -i /Users/seunghyun/codestates/seunghyunMac.pem settings.sh ubuntu@ec2-52-79-54-197.ap-northeast-2.compute.amazonaws.com:~/project2


#project2 폴더 생성 및 settings.sh 실행
ssh -i /Users/seunghyun/codestates/seunghyunMac.pem ubuntu@ec2-52-79-54-197.ap-northeast-2.compute.amazonaws.com "mkdir /home/ubuntu/project2 && ./settings.sh"
