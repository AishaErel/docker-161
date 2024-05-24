FROM node:alpine

# Install Python and pip

RUN apk add --no-cache python3 py3-pip

# Set working directory
WORKDIR /app

# Copy app.js into the image
COPY app.js .

# Expose the necessary port and define the command to run the app
EXPOSE 3000
CMD ["node", "app.js"]


# FROM node:alpine 
# COPY . /app
# WORKDIR /app
# CMD node app.js
