# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application's source code
COPY server.js .

# Expose the port your Node.js application will run on
EXPOSE 3000

# Start your Node.js application
CMD [ "node", "server.js" ]
