FROM mongo

# Create app directory
WORKDIR /usr/src/configs

# Copy config files
COPY mongo.conf .

EXPOSE 27017

CMD ["--config", "/usr/src/configs/mongo.conf"]
