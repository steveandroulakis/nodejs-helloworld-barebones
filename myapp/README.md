docker build -t node-docker --target test .

docker build -t node-docker --target prod .
docker run -p 8080:8080 -d steveandroulakis/example-express

changes..
added load balancer.. edited nsg
another test edit
refresh to see how long it takes
hmm let's see how fast now
"The old deployment was still in status 'Active' after the deployment timeout. The configured timeout for this action is 10 minutes."