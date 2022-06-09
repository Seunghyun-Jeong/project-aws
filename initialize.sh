#!/bin/sh

#yaml -> html
#npm install -g redoc-cli
redoc-cli bundle -o index.html openapi.yaml

#project2 폴더 생성
ssh -i ../seunghyunMac.pem ubuntu@ec2-52-79-54-197.ap-northeast-2.compute.amazonaws.com "mkdir /home/ubuntu/project2/"

#scp 로컬 -> EC2
scp -i ../seunghyunMac.pem ./index.html ubuntu@ec2-52-79-54-197.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/project2/
scp -i ../seunghyunMac.pem ./Dockerfile ubuntu@ec2-52-79-54-197.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/project2/
scp -i ../seunghyunMac.pem ./settings.sh ubuntu@ec2-52-79-54-197.ap-northeast-2.compute.amazonaws.com:/home/ubuntu/project2/

#settings.sh 실행
ssh -i ../seunghyunMac.pem ubuntu@ec2-52-79-54-197.ap-northeast-2.compute.amazonaws.com "cd /home/ubuntu/project2/ && sudo chmod a+x settings.sh && ./settings.sh"