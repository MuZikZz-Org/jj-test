# Use an official NGINX runtime as the base image
FROM node:18.18.0-alpine
COPY server.js .

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Copy your Node.js application code to the container
COPY . .

# Expose port 80 for NGINX
EXPOSE 3000

## Runtime ##
ENTRYPOINT ["node","server.js"]
