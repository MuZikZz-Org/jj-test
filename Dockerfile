# Use an official NGINX runtime as the base image
FROM node:18.18.0-alpine

# Set the working directory to /app
WORKDIR /app

# Install Node.js and npm
# RUN apt-get update && apt-get install -y nodejs npm

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy your Node.js application code to the container
COPY . .

# Expose port 80 for NGINX
EXPOSE 3000

# Start NGINX and your Node.js application
CMD ["node", "server.js"]
