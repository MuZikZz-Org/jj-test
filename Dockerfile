# Use an official NGINX runtime as the base image
FROM node:18.18.0-alpine
COPY server.js .

# Expose port 80 for NGINX
EXPOSE 3000

## Runtime ##
ENTRYPOINT ["node","server.js"]
