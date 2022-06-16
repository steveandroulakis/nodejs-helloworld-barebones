docker build -t node-docker --target test .

docker build -t node-docker --target prod .
docker run -p 8080:8080 -d steveandroulakis/example-express

changes..
added load balancer.. edited nsg