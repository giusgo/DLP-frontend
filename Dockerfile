# syntax=docker/dockerfile:1

# Node image
FROM node:20-alpine

# Working directory
WORKDIR /app

# Copy everything inside the container
COPY . .

# Install dependencies
RUN npm install

# Build application
RUN npm run build

# Expose port
EXPOSE 5044

# Start application
CMD ["npm", "start"]
