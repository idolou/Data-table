# Use a base image with Node.js pre-installed
FROM node:21.6.1-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your Node.js app runs on
EXPOSE 3001

# Command to run your Node.js application
CMD ["npm", "start"]
