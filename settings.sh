sudo apt update

docker build -t project2:0.1 .

docker ps -aq | xargs docker stop pj2 | xargs docker rm >& 1.log

docker run --name pj2 -p 80:80 project2:0.1
#docker run -i pj2 project2:0.1 
