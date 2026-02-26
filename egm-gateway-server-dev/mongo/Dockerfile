FROM mongo

# Copy the key file into the container
COPY mongo-keyfile.key /etc/mongo-keyfile.key

# Set permissions for the key file
RUN chmod 400 /etc/mongo-keyfile.key && chown mongodb:mongodb /etc/mongo-keyfile.key
