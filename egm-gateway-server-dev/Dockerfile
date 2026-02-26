# Use Ubuntu 22.04 as the base image
FROM ubuntu:22.04 as build

# Set environment variables to avoid interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive

ARG CACHEBUST=1

RUN echo $CACHEBUST

# Update the package list and install required packages
RUN apt-get update && apt-get install -y \
    curl \
    gnupg2 \
    lsb-release \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Add NodeSource APT repository for Node.js 20.x
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs

# Verify the installation
RUN node -v && npm -v

RUN apt-get update && apt-get install -y \
    libpcsclite1 \
    libpcsclite-dev \
    pcscd \
    && rm -rf /var/lib/apt/lists/*


# Create a user and set permissions
# RUN useradd -m myuser
# USER myuser
# RUN groupadd -r pcscd && usermod -a -G pcscd myuser

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

WORKDIR /usr/src/app/linux

COPY linux/package*.json ./ 

# Install dependencies
RUN npm install

# Set the working directory
WORKDIR /usr/src/app

# Copy the rest of the application code
COPY src/ ./src/

COPY webpack.config.js ./webpack.config.js
COPY linux/.env ./linux/.env

# Install dependencies
RUN npm run build

# Expose the application port
EXPOSE 9000

COPY *.sh ./
RUN chmod +x /usr/src/app/script.sh

CMD ["sh", "-c", "/usr/src/app/script.sh"]