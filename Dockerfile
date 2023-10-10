# Use an official NGINX runtime as the base image
FROM node:18.18.0-alpine
COPY server.js .

## Runtime ##
ENTRYPOINT ["node","server.js"]
